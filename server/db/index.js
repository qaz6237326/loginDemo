var mysql = require('mysql');
var config = require('../../config/config.json');

var connection = mysql.createConnection(config.cfg.db);
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '123456'
// });

module.exports = connection;