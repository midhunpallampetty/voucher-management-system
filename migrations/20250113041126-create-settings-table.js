'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Settings', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      maxExpiryTime: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 30,
      },
      voucherWidth: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 210,
      },
      voucherHeight: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 297,
      },
      titleFontSize: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 16,
      },
      textFontSize: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 12,
      },
      createdAt: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('Settings');
  },
};
