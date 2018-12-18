const express = require('express');
const app = express();
const path = require('path');
const passport = require('passport');

// passport 初始化
app.use(passport.initialize());

// 把passport传入config/passport模块中
require("../config/passport")(passport);

var router = require('./router');
var api = require('./api/login');

// 设置静态页面路径
app.use(express.static(path.join(__dirname, '../public')));

// 对所有的请求进行拦截的方法
app.use(function(req, res, next) {
    next();
});

function start() {

    // 设置路由
    router(app);

    // 设置request API
    api.Request(app);

    // 监听端口
    const server = app.listen(8888, 'localhost', function() {
        let host = server.address().address;
        let port = server.address().port;
        console.log('服务已启动，地址为：http://%s:%s', host, port);
    });
}

module.exports = server = {
    start: start
};