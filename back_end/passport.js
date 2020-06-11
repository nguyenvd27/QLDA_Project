const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const FacebookTokenStrategy = require('passport-facebook-token')
const { ExtractJwt } = require('passport-jwt')

const secret = require('./configuration/index')
const User = require('./models/User')

passport.use( new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: secret.JWT_SECRET
}, async (payload, done) => {
  try {
    const user = User.findOne({
      where: {id: payload.id}
    })
    if(!user) {
      return done(null, false)
    }
    done(null, user)
    
  } catch(error) {
    done(error, false)
  }
}))
