const bodyParser = require('body-parser');
const urlencodeParser = bodyParser.urlencoded({extended: false});
const passport = require('passport');

const db = require('../db/login');
const comFun = require('../../utils/commonFun');
const config = require('../../config/config.json');
const utf8 = config.httpHeader.utf8;

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
                let _db;
                let _createJwt;

                _db = db.loginDB(body.name, body.password);
                _db.then(data => {
                        if (data) {
                            // 创建token
                            _createJwt = comFun.createJwt(rule, 20);
                            _createJwt.then((token) => {
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


module.exports ={
    Request: Request
};