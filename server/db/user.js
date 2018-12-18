const db = require('./index');
/**
 * 用户数据库操作
 * @param name 用户名
 * @param password 密码
 * */
const databaseName = 'wldb';
module.exports = {
    queryAllUserDB() {
        const sql = 'select * from user';
        return new Promise((resolve, reject) => {
            db.query('use ' + databaseName, function (err, result) {
                if (err) return console.log(err);
                db.query(sql, function (err, result) {
                    console.log('查询所有用户信息===========================================')
                    if (err) {
                        return console.log('err')
                    }
                    if (result.length) {
                        resolve(result);
                    } else {
                        resolve(false);
                    }
                    console.log('查询所有用户信息===========================================')
                })
            })
        })
    },
    updateDB(obj) {
        const sql = 'select * from user'
        return new Promise((resolve, reject) => {
            db.query(sql,function(err, result) {
                console.log('查询所有用户信息===========================================')
                if(err) {
                    return console.log('err')
                }
                if (result.length) {
                    resolve(result);
                } else {
                    resolve(false);
                }
                console.log('查询所有用户信息===========================================')
            })
        })
    },
    addUserDB(obj) {

    }
};