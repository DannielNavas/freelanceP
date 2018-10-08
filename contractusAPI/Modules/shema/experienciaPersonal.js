const db = require('../db/db');

const jsORM = require('js-hibernate')
const session = jsORM.session(db);

var experienciaPersonalMap = session.tableMap('experienciaPersonal')
    .columnMap('idexperienciaPersonal', 'idexperienciaPersonal', { isAutoIncrement: true })
    .columnMap('fechaInicio', 'fechaInicio')
    .columnMap('fechaFinal', 'fechaFinal')
    .columnMap('lugarExperiencia', 'lugarExperiencia')
    .columnMap('funciones', 'funciones')
    .columnMap('users_documento', 'users_documento')

module.exports = experienciaPersonalMap;