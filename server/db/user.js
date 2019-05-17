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
        return useAndHandler(querySql, [], '查询所有用户信息');
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
        return useAndHandler(_sql, _data, '修改用户信息');
    },
    addUserDB(body) {
        let _data =  [body.name, body.password, body.age];
        return useAndHandler(addSql, _data, '添加新用户');
    },
    deleteUserDB(body) {
        let _data =  [body.id];
        return useAndHandler(deleteSql, _data, '删除用户');
    }
};

function useAndHandler(sql, data, msg) {
    return new Promise((resolve, reject) => {
        db.query('use ' + databaseName, function (err, result) {
            if (err) {
                resolve(false);
                return console.log(err);
            } else {
                db.query(sql, data, function(err, result) {
                    if(err) {
                        resolve(false);
                        return console.log(err)
                    }
                    console.log(result);
                    if (result.length > 0 || result.affectedRows) {
                        resolve(result);
                    } else {
                        resolve(false);
                    }
                    console.log(`${msg}===========================================`)
                })
            }
        })
    })
}