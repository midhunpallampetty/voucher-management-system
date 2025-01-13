const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const Setting = sequelize.define(
  'Setting',
  {
    maxExpiryTime: {
      type: DataTypes.INTEGER,
      defaultValue: 30, // Default expiry time in days
      allowNull: true,
    },
    voucherWidth: {
      type: DataTypes.INTEGER,
      defaultValue: 100, // Default width in mm
      allowNull: true,
    },
    voucherHeight: {
      type: DataTypes.INTEGER,
      defaultValue: 50, // Default height in mm
      allowNull: true,
    },
    titleFontSize: {
      type: DataTypes.INTEGER,
      defaultValue: 16, // Default title font size
      allowNull: true,
    },
    textFontSize: {
      type: DataTypes.INTEGER,
      defaultValue: 12, // Default text font size
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: () => new Date().toISOString(),
    },
    updatedAt: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: () => new Date().toISOString(),
    },
  },
  {
    tableName: 'Setting', 
  }
);

module.exports = Setting;
