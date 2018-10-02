const db = require('../db/db');

const jsORM = require('js-hibernate')
const session = jsORM.session(db);

var userMap = session.tableMap('users')
    .columnMap('id', 'id', { isAutoIncrement: true })
    .columnMap('user', 'user')
    .columnMap('email', 'email')
    .columnMap('pass','pass')

module.exports = userMap;