const express = require('express');
const { getAllVouchers, generateVoucher,exportVoucherPDF } = require('../controllers/voucherController');

const router = express.Router();

// GET all vouchers
router.get('/', getAllVouchers);

// POST generate voucher
router.post('/generate', generateVoucher);
router.post('/export-pdf', exportVoucherPDF);
module.exports = router;
