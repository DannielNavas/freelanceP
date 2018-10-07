const db = require('../db/db');

const jsORM = require('js-hibernate')
const session = jsORM.session(db);

var participantesProyectoMap = session.tableMap('participantesProyecto')
    .columnMap('idparticipantesProyecto', 'idparticipantesProyecto', { isAutoIncrement: true })
    .columnMap('proyecto_idproyecto', 'proyecto_idproyecto')
    .columnMap('users_documento', 'users_documento')

module.exports = participantesProyectoMap;