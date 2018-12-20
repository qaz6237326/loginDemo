const db = require('./index');
/**
 * 用户数据库操作
 * @param name 用户名
 * @param password 密码
 * @param id 用户唯一标识
 * @param age 年龄
 * */
const databaseName = 'wldb';
const querySql = 'select * from v_user';
const addSql = 'insert into user(name, password, age, updateTime) values(?,?,?,now())';
const updateSql1 = 'update user SET name=?,age=?,updateTime=now()';
const updateSql2 = ',password=?';
const updateSql3 = ' WHERE id=?';
const deleteSql = 'delete from user where id=?';

module.exports = {
    queryAllUserDB() {
        return new Promise((resolve, reject) => {
            db.query('use ' + databaseName, function (err, result) {
                if (err) return console.log(err);
                db.query(querySql, function (err, result) {
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
    updateDB(body) {
        let _sql;
        let _data;
        if (body.password) {
            _sql = updateSql1 + updateSql2 + updateSql3;
            _data= [body.name, body.age, body.password, body.id];
        } else {
            _sql = updateSql1 + updateSql3;
            _data= [body.name, body.age, body.id];
        }
        return new Promise((resolve, reject) => {
                db.query('use ' + databaseName, function (err, result) {
                    if (err) {
                        resolve(false);
                        return console.log(err);
                    } else {
                        db.query(_sql, _data, function(err, result) {
                            if(err) {
                                resolve(false);
                                console.log('修改用户失败。。。。');
                                return console.log(err)
                            }
                            console.log(result)
                            if (result.affectedRows) {
                                resolve(result);
                            } else {
                                resolve(false);
                            }
                            console.log('修改用户信息===========================================')
                        })
                    }
                });
        })
    },
    addUserDB(body) {
        let _data =  [body.name, body.password, body.age]
        return new Promise((resolve, reject) => {
            db.query('use ' + databaseName, function (err, result) {
                if (err) {
                    resolve(false);
                    return console.log(err);
                } else {
                    db.query(addSql, _data, function(err, result) {
                        if(err) {
                            resolve(false);
                            return console.log(err)
                        }
                        if (result.affectedRows) {
                            resolve(result);
                        } else {
                            resolve(false);
                        }
                        console.log('添加新用户===========================================')
                    })
                }
            })
        })
    },
    deleteUserDB(body) {
        let _data =  [body.id];
        return new Promise((resolve, reject) => {
            db.query('use ' + databaseName, function (err, result) {
                if (err) {
                    resolve(false);
                    return console.log(err);
                } else {
                    db.query(deleteSql, _data, function(err, result) {
                        if(err) {
                            resolve(false);
                            return console.log(err)
                        }
                        console.log(result)
                        if (result.affectedRows) {
                            resolve(result);
                        } else {
                            resolve(false);
                        }
                        console.log('删除用户===========================================')
                    })
                }
            })
        })
    }
};