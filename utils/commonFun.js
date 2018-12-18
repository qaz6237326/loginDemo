const jwt = require('jsonwebtoken');
const passport = require('passport');
const config = require('../config/config.json');
const secretOrKey = config.cfg.secretOrKey;

module.exports = {
    /**
     * 创建一个token
     * @param rule 是任意对象，用来制定规则
     * @param time token过期的时间
     * */
    createJwt: function (rule, time) {
        return new Promise(function (resolve, reject) {
            jwt.sign(rule, secretOrKey, {expiresIn: time}, (err, token) => {
                if (err) {
                    console.log(err);
                    return resolve(false);
                }
                resolve(token);
            });
        })
    }
};