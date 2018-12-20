const userDB = require('../db/user');
const comFun = require('../../utils/commonFun');


module.exports = function UserApi(app) {
    let body;
    let json;
    /**
     * 更新用户信息
     * */
    app.get('/queryAllUser', (req, res) => {
        userDB.queryAllUserDB()
            .then((data) => {
                if(data) {
                    json = {
                      result: true,
                      data: data
                    };
                    res.json(json)
                }
            })
    });
    /**
     * 更新用户信息
     * */
    app.post('/updateUser', (req, res) => {
        req.on('data', function(data) {
            body = comFun.parserData(data);
        });
        req.on('end', function() {
            console.log('修改用户信息==================================================');
            console.log(body);
            userDB.updateDB(body)
                .then((data) => {
                    if (data) {
                        json = {
                            result: true,
                            data: '',
                            message: '更新用户信息成功。'
                        };
                        res.json(json)
                    } else {
                        json = {
                            result: false,
                            data: '',
                            message: '更新用户信息失败。'
                        };
                        res.json(json)
                    }
                });
        })
    });
    /**
     * 添加用户
     * */
    app.post('/addUser', (req, res) => {
        req.on('data', function(data) {
            body = comFun.parserData(data);
        });
        req.on('end', function() {
            console.log('添加用户==================================================');
            console.log(body);
            userDB.addUserDB(body)
                .then((data) => {
                    if (data) {
                        json = {
                            result: true,
                            data: '',
                            message: '添加新用户成功。'
                        };
                        res.json(json)
                    } else {
                        json = {
                            result: false,
                            data: '',
                            message: '添加新用户失败。'
                        };
                        res.json(json)
                    }
                });
        })
    });
    /**
     * 添加用户
     * */
    app.post('/deleteUser', (req, res) => {
        req.on('data', function(data) {
            body = comFun.parserData(data);
        });
        req.on('end', function() {
            console.log('删除用户==================================================');
            userDB.deleteUserDB(body)
                .then((data) => {
                    if (data) {
                        json = {
                            result: true,
                            data: '',
                            message: '删除用户成功。'
                        };
                        res.json(json)
                    } else {
                        json = {
                            result: false,
                            data: '',
                            message: '删除用户失败。'
                        };
                        res.json(json)
                    }
                });
        })
    });
};
