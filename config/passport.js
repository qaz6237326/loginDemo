var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';

module.exports = passport => {
    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        console.log('``````````````passport里``````````````````````````````')
        console.log(jwt_payload);
        console.log('``````````````passport里``````````````````````````````')
        return done(null, jwt_payload)
    }))
};