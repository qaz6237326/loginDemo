var path = require('path');

function router(app) {
    app.get('/', function(req, res) {
        res.sendFile(rootPath('index.html'));
    });
    app.get('/login', function(req, res) {
        res.sendFile(rootPath('login.html'));
    });
}

/**
 * 返回从根路径开始匹配的静态文件目录
 * */
function rootPath(pagePath) {
    console.log(`访问${pagePath}页`);
    return path.join(__dirname, '../views/' + pagePath)
}

module.exports = router;


