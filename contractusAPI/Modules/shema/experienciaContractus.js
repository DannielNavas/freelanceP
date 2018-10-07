const db = require('../db/db');

const jsORM = require('js-hibernate')
const session = jsORM.session(db);

var experienciaContractusMap = session.tableMap('experienciaContractus')
    .columnMap('idexperienciaContractus', 'idexperienciaContractus', { isAutoIncrement: true })
    .columnMap('fechaInicio', 'fechaInicio')
    .columnMap('fechaFinal', 'fechaFinal')
    .columnMap('cliente', 'cliente')
    .columnMap('tipoProyecto_idtipoProyecto', 'tipoProyecto_idtipoProyecto')

module.exports = experienciaContractusMap;