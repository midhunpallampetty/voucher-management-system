const User = require('../models/User');

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username, password } });
    if (!user) {
      return res.status(401).send('Invalid credentials.');
    }

    req.session.user = user;
    res.redirect('/');
  } catch (error) {
    res.status(500).send('Error logging in.');
  }
};

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/login');
  });
};
exports.register = async (req, res) => {
    const { username, password, email } = req.body;
  
    try {
      
      const existingUser = await User.findOne({ where: { username } });
      if (existingUser) {
        return res.status(400).send('Username already exists');
      }
  
    
      const newUser = await User.create({
        username,
        password,  
        email,
      });
  
      res.status(201).send('User registered successfully.');
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).send('Error registering user');
    }
  };
  
