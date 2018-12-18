const userDB = require('../db/user');


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

        })
    });

    /**
     * 添加用户
     * */
    app.post('/addUser', (req, res) => {
        req.on('data', function(data) {

        })
    });
}
