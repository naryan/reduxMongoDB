const passport = require('passport');

//tells passport to look for a 'jwt' strategy that wee define
const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = {
  requireAuth,
};