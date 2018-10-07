const db = require('../db/db');

const jsORM = require('js-hibernate')
const session = jsORM.session(db);

var tipoPerfilMap = session.tableMap('tipoPerfil')
    .columnMap('idtipoPerfil', 'idtipoPerfil', { isAutoIncrement: true })
    .columnMap('tipoPerfil', 'tipoPerfil')

module.exports = tipoPerfilMap;