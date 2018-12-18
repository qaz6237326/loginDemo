const UserApi = require('./user');
const loginApi = require('./login');

module.exports = (app) => {
    loginApi(app);
    UserApi(app);
};