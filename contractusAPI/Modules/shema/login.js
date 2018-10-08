const db = require('../db/db');

const jsORM = require('js-hibernate')
const session = jsORM.session(db);

var userMap = session.tableMap('users')
    .columnMap('idusers', 'idusers', { isAutoIncrement: true })
    .columnMap('user', 'user')
    .columnMap('email', 'email')
<<<<<<< HEAD:contractusAPI/Modules/shema/shema.js
    .columnMap('pasword', 'pasword')
=======
    .columnMap('pasword','pasword')
    .columnMap('documento','documento')
>>>>>>> master:contractusAPI/Modules/shema/login.js

module.exports = userMap;