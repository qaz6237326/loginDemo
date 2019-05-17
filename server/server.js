const express = require('express');
const app = express();
const path = require('path');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const router = require('./router');
const db = require('./db/index');

// 解析请求体，并把解析结果放在request.body这个对象里，方便post请求时获取数据
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false})); // true和false 都一样

// 解析cookie
app.use(cookieParser());

// passport 初始化
app.use(passport.initialize());

// 把passport传入config/passport模块中
require("../config/passport")(passport);

// 设置静态页面路径
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../public/web')));

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
    let server = app.listen(8888, 'localhost', function(err) {
        let host = server.address().address;
        let port = server.address().port;
        console.log('服务已启动，地址为：http://%s:%s', host, port);
    });
}

module.exports = server = {
    start: start
};