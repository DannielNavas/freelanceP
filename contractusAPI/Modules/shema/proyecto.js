const db = require('../db/db');

const jsORM = require('js-hibernate')
const session = jsORM.session(db);

var proyectoMap = session.tableMap('proyecto')
    .columnMap('idproyecto', 'idproyecto', { isAutoIncrement: true })
    .columnMap('nombre', 'nombre')
    .columnMap('descripcion', 'descripcion')
    .columnMap('presupuesto','presupuesto')
    .columnMap('tipoProyecto_idtipoProyecto','tipoProyecto_idtipoProyecto')

module.exports = proyectoMap;