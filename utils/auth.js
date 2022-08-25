const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route

  //this checks if session exists if not it redirects. 
  if (!req.session.logged_in) {
    res.redirect('/login');
  } else {
    next();
  }
};

module.exports = withAuth;
