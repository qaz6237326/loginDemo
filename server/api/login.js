const bodyParser = require('body-parser');
const urlencodeParser = bodyParser.urlencoded({extended: false});
const db = require('../db/index');
const jwt = require('jsonwebtoken');
const passport = require('passport');

const config = require('../../config/config.json');
const secretOrKey = config.cfg.secretOrKey;
const utf8 = config.httpHeader.utf8;

const databaseNameSql = 'use wldb';
const queryUser = `SELECT id,name,age FROM user WHERE name= ? and password= ?`;

function Request(app) {
    app.post('/loginApi', (req, res) => {
        // 接收到formData表单的数据,form表单的数据在request.body里
        // console.log(req.body);
        res.writeHead(200, utf8);//设置response编码为utf-8

        // 定义规则
        let rule = {};
        let body;

        // 用于接收json数据，data为Buffer类型，需要toString()转换，然后用JSON.parse()转换成JSON数据
        req.on('data', function(data) {
            body = JSON.parse(data.toString());
            // 规则头使用name作为内容
            rule.name = JSON.parse(data.toString()).name;
        });

        req.on('end', function() {
            let json = {};
            if (!body.name || !body.password) {
                json = {
                    result: false,
                    message: '请填写完整的信息'
                };
                res.end(JSON.stringify(json));
            } else {
                // 查询数据库是否有相关用户信息
                loginDB(body.name, body.password)
                    .then(data => {
                        if (data) {
                            // 创建token
                            createJwt(rule, 20)
                                .then(function (token) {
                                    if (token) {
                                        json = {
                                            result: true,
                                            message: '获取token成功',
                                            data: data,
                                            token: 'Bearer ' + token // 需要固定一个头部的名字 'Bearer '
                                        };
                                        res.end(JSON.stringify(json));
                                    }
                                })
                        } else {
                            json = {
                                result: false,
                                message: '账号或密码错误！'
                            };
                            res.end(JSON.stringify(json));
                        }
                    })
            }
        })
    });
    app.get('/ver', passport.authenticate('jwt', { session: false }), function(req, res) {
        res.writeHead(200, utf8);//设置response编码为utf-8
        console.log('校验成功');
        var json = {
            result: true,
            message: '校验token成功'
        };
        res.end(JSON.stringify(json));
    })
}

/**
 * 创建一个token
 * @param rule 是任意对象，用来制定规则
 * @param time token过期的时间
 * */
function createJwt(rule,time) {
    return new Promise(function(resolve, reject) {
        jwt.sign(rule, secretOrKey, {expiresIn: time}, (err, token) => {
            if (err) {
                console.log(err);
                return resolve(false);
            }
            resolve(token);
        });
    })

}

/**
 * 登录查询数据库
 * @param name 用户名
 * @param password 密码
 * */
function loginDB(name, password) {
    // 使用Promise处理异步
    return new Promise(function(resolve, reject) {
        // 选择需要查询的数据库
        db.query(databaseNameSql, function(err, result) {
            if (err) return console.log(err);

            // 查询表里的用户名和密码是否匹配，如果匹配返回用户数据，不匹配返回false
            db.query(queryUser, [name, password], function(err, result) {
                if (err) return console.log(err);
                if (result.length) {
                    resolve(result);
                } else {
                    resolve(false);
                }

                console.log(name + '用户的数据---------------------------------');
                console.log(result);
                console.log('查询到的数据---------------------------------');
            })
        })
    });
}


module.exports ={
    Request: Request
};