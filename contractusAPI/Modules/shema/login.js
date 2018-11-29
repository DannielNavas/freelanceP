const db = require('../db/db');

const jsORM = require('js-hibernate')
const session = jsORM.session(db);

var userMap = session.tableMap('users')
    .columnMap('idusers', 'idusers', { isAutoIncrement: true })
    .columnMap('user', 'user')
    .columnMap('email', 'email')
    .columnMap('pasword', 'pasword')
    .columnMap('documento', 'documento');

module.exports = userMap;