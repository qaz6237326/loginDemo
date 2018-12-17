var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

var config = require('./config.json');

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.cfg.secretOrKey;

module.exports = passport => {
    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        console.log('``````````````passport里``````````````````````````````')
        console.log(jwt_payload);
        console.log('``````````````passport里``````````````````````````````')
        return done(null, jwt_payload)
    }))
};