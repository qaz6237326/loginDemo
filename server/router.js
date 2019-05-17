var path = require('path');

function router(app) {
    /** 配置默认页面 */
    app.get('/', function(req, res) {
        // res.sendFile(rootPath('index.html'));
        res.sendFile(path.join(__dirname, '../public/web'));
    });
    app.get('/login', function(req, res) {
        res.sendFile(rootPath('login.html'));
    });
}

/**
 * 返回从根路径开始匹配的静态文件目录
 * */
function rootPath(pagePath) {
    return path.join(__dirname, '../views/' + pagePath)
}

module.exports = router;


