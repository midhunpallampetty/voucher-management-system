exports.getDashboard = (req, res) => {
  const username = req.session.username || 'Guest'; 
  res.render('dashboard', { username });
};
