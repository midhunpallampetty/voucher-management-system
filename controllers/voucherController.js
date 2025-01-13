const QRCode = require('qrcode');
const Voucher = require('../models/Voucher');
const Setting = require('../models/Setting');
const PDFDocument = require('pdfkit');
const path = require('path');
const fs = require('fs');

const getAllVouchers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5; 
    const offset = (page - 1) * limit;

    const { rows: vouchers, count: totalVouchers } = await Voucher.findAndCountAll({
      limit, 
      offset,
    });

    const totalPages = Math.ceil(totalVouchers / limit);

    res.render('voucher', {
      vouchers,
      currentPage: page,
      totalPages,
      limit,
    });
  } catch (error) {
    console.error('Error fetching vouchers:', error);
    res.status(500).send('Internal Server Error');
  }
};



const generateVoucher = async (req, res) => {
  try {
    const settings = await Setting.findOne();
    const maxExpiryTime = settings?.maxExpiryTime || 30;

    const code = Math.random().toString().slice(2, 12);

  
    const generatedDate = new Date();
    const expiryDate = new Date(generatedDate);
    expiryDate.setDate(generatedDate.getDate() + maxExpiryTime);


    const formattedGeneratedDate = generatedDate.toISOString().split('Z')[0];
    const formattedExpiryDate = expiryDate.toISOString().split('Z')[0];

    const qrCode = await QRCode.toDataURL(code);

    await Voucher.create({
      code,
      generatedDate: formattedGeneratedDate,
      expiryDate: formattedExpiryDate,
      qrCode,
    });

    res.redirect('/vouchers');
  } catch (error) {
    console.error('Error generating voucher:', error);
    res.status(500).send('Internal Server Error');
  }
};
const exportVoucherPDF = async (req, res) => {
  const { voucherId } = req.body;
console.log(voucherId,'hhh');

  try {
      
      const voucher = await Voucher.findByPk(voucherId);
      if (!voucher) {
          return res.status(404).json({ error: 'Voucher not found' });
      }

    
      const settings = await Setting.findOne();

      
      const doc = new PDFDocument();
      const filePath = path.join(__dirname, `../public/vouchers/voucher_${voucher.code}.pdf`);

     
      doc.pipe(fs.createWriteStream(filePath));

     
      doc.fontSize(settings?.titleFontSize || 20).text(settings?.title || 'Voucher', { align: 'center' });

      
      const qrCodePath = path.join(__dirname, `../public/${voucher.qrCode}`);
      if (fs.existsSync(qrCodePath)) {
          doc.image(qrCodePath, {
              fit: [settings?.voucherWidth || 200, settings?.voucherHeight || 200],
              align: 'center',
              valign: 'center',
          });
      }

      
      doc.moveDown();
      doc.fontSize(settings?.textFontSize || 12)
          .text(`Generated Date: ${new Date(voucher.generatedDate).toLocaleDateString()}`, { align: 'center' })
          .text(`Expiry Date: ${new Date(voucher.expiryDate).toLocaleDateString()}`, { align: 'center' });

      
      doc.end();

      
      res.download(filePath, `voucher_${voucher.code}.pdf`, (err) => {
          if (err) {
              console.error('Error downloading file:', err);
              res.status(500).json({ error: 'Error downloading file' });
          }
      });
  } catch (error) {
      console.error('Error exporting PDF:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};


module.exports = {
  getAllVouchers,
  generateVoucher,
  exportVoucherPDF
};
