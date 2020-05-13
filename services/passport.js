const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');

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


//Let's passport know that we have declared a jwt strateegy
//if we call passport authnitication ('jwt') passport will refer
//to this jwtLogin strategy that we define 
passport.use(jwtLogin);