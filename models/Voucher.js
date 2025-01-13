const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Voucher = sequelize.define(
  'Voucher',
  {
    code: {
      type: DataTypes.STRING(10),
      allowNull: false,
      unique: true,
    },
    generatedDate: {
      type: DataTypes.DATE, // Change to DATE for proper date handling
      allowNull: false,
    },
    expiryDate: {
      type: DataTypes.DATE, // Change to DATE for proper date handling
      allowNull: false,
    },
    qrCode: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    timestamps: true, // Enable automatic management of createdAt and updatedAt
    tableName: 'Voucher',
  }
);

module.exports = Voucher;


module.exports = Voucher;
