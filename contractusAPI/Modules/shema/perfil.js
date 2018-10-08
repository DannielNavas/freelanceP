const db = require('../db/db');

const jsORM = require('js-hibernate')
const session = jsORM.session(db);

var perfilMap = session.tableMap('perfil')
    .columnMap('documentoIdentidad', 'documentoIdentidad', { isAutoIncrement: false })
    .columnMap('nombre', 'nombre')
    .columnMap('titulo', 'titulo')
    .columnMap('portafolio', 'portafolio')
    .columnMap('tokenCliente', 'tokenCliente')
    .columnMap('users_idusers', 'users_idusers')
    .columnMap('tipoPerfil_idtipoPerfil', 'tipoPerfil_idtipoPerfil')


module.exports = perfilMap;