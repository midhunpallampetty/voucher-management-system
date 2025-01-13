const express = require('express');
const { getSettingsPage, updateSettings } = require('../controllers/settingsController');
const router = express.Router();

router.get('/', getSettingsPage);

router.post('/', updateSettings);

module.exports = router;
