var bodyParser = require('body-parser');
var urlencodeParser = bodyParser.urlencoded({extended: false});
var db = require('../db/index');

var databaseName = 'wldb';

function Request(app) {
    app.post('/loginApi', urlencodeParser, function(req, res) {
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});//设置response编码为utf-8
        // 接收到formData表单的数据,form表单的数据在request.body里
        // console.log(req.body);

        var json = {};
        var body = {};

        // 用于接收json数据，data为Buffer类型，需要toString()转换，然后用JSON.parse()转换成JSON数据
        req.on('data', function(data) {
            body = JSON.parse(data.toString());
        });

        req.on('end', function() {
            if (!body.name || !body.password) {
                json = {
                    result: false,
                    message: '请填写完整的信息'
                };
                res.end(JSON.stringify(json));
            } else {
                loginDB(body.name, body.password)
                    .then(function(data) {
                        if (data) {
                            json = {
                                result: true,
                                message: '登录成功'
                            };
                        } else {
                            json = {
                                result: false,
                                message: '账号或密码错误！'
                            };
                        }
                        res.end(JSON.stringify(json));
                    });
            }
        });
    })
}

function loginDB(name, password) {
    // 使用Promise处理异步
    return new Promise(function(resolve, reject) {
        // 选择需要查询的数据库
        db.query(`use ${databaseName}`, function(err, result) {
            if (err) return console.log(err);

            // 查询表里的用户名和密码是否匹配，如果匹配返回用户数据，不匹配返回false
            db.query(`SELECT * FROM user WHERE name='${name}' and password='${password}'`, function(err, result) {
                if (err) return console.log(err);
                if (result.length) {
                    resolve(result);
                } else {
                    resolve(false);
                }

                console.log('查询到的数据---------------------------------');
                console.log(result);
                console.log('查询到的数据---------------------------------');
            })
        })
    });
}


module.exports = api ={
    Request: Request
};