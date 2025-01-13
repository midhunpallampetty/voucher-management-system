const Setting = require('../models/Setting');

const getSettingsPage = async (req, res) => {
  try {
    const setting = await Setting.findAll();
    console.log(setting,"/////////////////////////");
    
        res.render('settings', {msg:"hai"});
  } catch (error) {
    console.error('Error fetching settings:', error);
    res.status(500).send('An error occurred while loading the settings page.');
  }
};

const updateSettings = async (req, res) => {
  try {
    const { maxExpiryTime, voucherWidth, voucherHeight, titleFontSize, textFontSize } = req.body;

    const [setting] = await Setting.findOrCreate({ where: { id: 1 } });
    setting.maxExpiryTime = maxExpiryTime;
    setting.voucherWidth = voucherWidth;
    setting.voucherHeight = voucherHeight;
    setting.titleFontSize = titleFontSize;
    setting.textFontSize = textFontSize;

    await setting.save();
    res.redirect('/vouchers');
  } catch (error) {
    console.error('Error updating settings:', error);
    res.status(500).send('An error occurred while updating the settings.');
  }
};

module.exports = {
  getSettingsPage,
  updateSettings,
};
