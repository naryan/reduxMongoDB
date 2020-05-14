const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local');

const { User } = require('./../models');
const { secret } = require('./../config');

//Setup option for jwt
const jwtOption = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: secret,
}
//Create jwt streategy for handling jwt
// This strategy is for authenticating users on each request
const jwtLogin = new JwtStrategy(jwtOption, async (payload, done) => {
  // payload = { sub: user_id, iat: timeeStamp }
  try {
    const user = await User.findById(payload.sub);
    if(!user){
      return done(null, false);
    }
    return done(null, user);
  } catch (e) {
    return done(e, false);
  }
});

//By default Localstrategy is looking for a uesernamee
// However we are not using username we are using email
//SO here I am saying , heey if you're lookign for the username
// look for the email property from the request instead
const localOption = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOption, async (email, password, done) => {
  try {
    const user = await User.findOne({ email });
    if(!user){
      return done(null, false);
    }
    const isMatch = await user.comparePassword(password);
    if(!isMatch){
      return done(null, false);
    }
    return done(null, user);
  } catch (e) {
    return done(e, false);
  }
});
//Let's passport know that we have declared a jwt strateegy
//if we call passport authnitication ('jwt') passport will refer
//to this jwtLogin strategy that we define 
passport.use(jwtLogin);

//lets passpoet know that we have decleared a local strategy
//if we call passort authentication('local') passport will refer
// to this localeLogin as the stratagy that we define
passport.use(localLogin);

