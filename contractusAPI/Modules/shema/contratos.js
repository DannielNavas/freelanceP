const db = require('../db/db');

const jsORM = require('js-hibernate')
const session = jsORM.session(db);

var contratosMap = session.tableMap('contratos')
    .columnMap('idcontratos', 'idcontratos', { isAutoIncrement: true })
    .columnMap('tokenCliente', 'tokenCliente')
    .columnMap('users_documento', 'users_documento')

module.exports = contratosMap;