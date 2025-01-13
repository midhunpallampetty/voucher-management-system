const sequelize = require('./config/sequelize');
const User = require('./models/User');
const Voucher = require('./models/Voucher');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected.');

    await sequelize.sync({ force: true });
    console.log('Models synchronized.');

    // Create a test user
    await User.create({ username: 'admin', password: 'password123' });
    console.log('Test user created.');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await sequelize.close();
  }
})();
