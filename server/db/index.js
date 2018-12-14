var mysql = require('mysql');
var cfg = require('../../config/config.json');

var connection = mysql.createConnection(cfg.config.db);
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '123456'
// });

module.exports = connection;