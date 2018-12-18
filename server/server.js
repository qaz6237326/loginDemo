const express = require('express');
const app = express();
const path = require('path');
const passport = require('passport');

const router = require('./router');
const db = require('./db/index');

// passport 初始化
app.use(passport.initialize());

// 把passport传入config/passport模块中
require("../config/passport")(passport);

// 设置静态页面路径
app.use(express.static(path.join(__dirname, '../public')));

// 对所有的请求进行拦截的方法
app.use(function(req, res, next) {
    console.log(req.url + '请求');
    next();
});

// 初始化API
require('./api/index')(app);

function start() {
    // 连接数据库
    db.connect(function(err, res){
        if (err) return console.log(err);
        console.log('数据库连接成功')
    });

    // 设置路由
    router(app);

    // 监听端口
    let server = app.listen(8888, 'localhost', function() {
        let host = server.address().address;
        let port = server.address().port;
        console.log('服务已启动，地址为：http://%s:%s', host, port);
    });
}

module.exports = server = {
    start: start
};