const express = require('express');
const session = require('express-session');
const path = require('path');
const settingsRoutes = require('./routes/settings');
const authRoutes = require('./routes/authRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const voucherRoutes = require('./routes/vouchers');
const bodyParser = require('body-parser');
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: process.env.SESSION_KEY, resave: false, saveUninitialized: true }));
app.use(
    session({
      secret: process.env.SESSION_KEY, 
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false }, 
    })
  );

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

app.use('/', authRoutes);
app.use('/', dashboardRoutes);
app.use('/', voucherRoutes);
app.use('/settings', settingsRoutes);
app.use('/vouchers', voucherRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
