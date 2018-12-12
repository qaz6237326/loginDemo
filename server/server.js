var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '../public')));

// var staticFiles = require('./public');
var router = require('./router');
var api = require('./api/login');
var db = require('./db/index');

function start() {

    // 设置静态页面路径
    // staticFiles.configStatic(app, express);
    db.connect(function(err, res){
        if (err) return console.log(err);
        console.log('连接成功')
    });

    // 设置路由
    router(app);
    // 设置request API
    api.Request(app);

    // 监听端口
    var server = app.listen(8888, 'localhost', function() {
        var host = server.address().address;
        var port = server.address().port;
        console.log('服务已启动，地址为：http://%s:%s', host, port);
    });
}

module.exports = server = {
    start: start
};