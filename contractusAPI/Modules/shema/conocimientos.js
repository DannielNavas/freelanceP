const db = require('../db/db');

const jsORM = require('js-hibernate')
const session = jsORM.session(db);

var conocimientosMap = session.tableMap('conocimientos')
    .columnMap('idconocimientos', 'idconocimientos', { isAutoIncrement: true })
    .columnMap('conocimientos', 'conocimientos')
    .columnMap('valoracion', 'valoracion')
    .columnMap('users_documento', 'users_documento')

module.exports = conocimientosMap;