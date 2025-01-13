const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('mssql://sa:Mid@123456@localhost:1433/master', {
  dialect: 'mssql',
  logging: false,  
  dialectOptions: {
    options: {
      encrypt: false, 
    },
  },
});


sequelize
  .authenticate()
  .then(() => console.log('Database connected successfully.'))
  .catch((err) => console.error('Unable to connect to the database:', err));

module.exports = sequelize;
