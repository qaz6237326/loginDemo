const db = require('./index');
/**
 * 登录查询数据库
 * @param name 用户名
 * @param password 密码
 * */

module.exports = {
    loginDB: function (name, password) {
        const databaseName = 'wldb';
        const queryUser = `SELECT id,name,age FROM user WHERE name= ? and password= ?`;

        // 使用Promise处理异步
        return new Promise(function (resolve, reject) {
            // 选择需要查询的数据库
            db.query('use ' + databaseName, function (err, result) {
                if (err) {
                    resolve(false);
                    return console.log(err);
                } else {
                    // 查询表里的用户名和密码是否匹配，如果匹配返回用户数据，不匹配返回false
                    db.query(queryUser, [name, password], function (err, result) {
                        console.log(name + '用户的数据---------------------------------');
                        if (err) return console.log(err);
                        if (result.length) {
                            resolve(result);
                        } else {
                            resolve(false);
                        }
                        console.log(result);
                        console.log('查询到的数据---------------------------------');
                    })
                }
            })
        });
    }
}