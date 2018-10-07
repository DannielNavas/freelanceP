const db = require('../db/db');

const jsORM = require('js-hibernate')
const session = jsORM.session(db);

var tipoProyectoMap = session.tableMap('tipoProyecto')
    .columnMap('idtipoProyecto', 'idtipoProyecto', { isAutoIncrement: true })
    .columnMap('tipoProyecto', 'tipoProyecto')

module.exports = tipoProyectoMap;