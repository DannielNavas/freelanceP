const connection = require('./db/db')
const crypto = require('crypto');
const cDB = require('./shema/perfil')
const db = require('./db/db');
const jsORM = require('js-hibernate');
const session = jsORM.session(db);
const env = require('dotenv')
env.config()
const secret = process.env.PASS_CONTRACTUS


connection.connect();

var perfilModel = {}

// get all perfil
perfilModel.getPerfil = function (userData, callback) {
    console.log(userData)
    var query = session.query(cDB)

    query.then(function (result) {
        console.log('ok')
        var jsonObj = {
            id: result[0].idperfil,
            nombre: result[0].nombre,
            titulo: result[0].titulo,
            portafolio: result[0].portafolio,
            tokenCliente: result[0].tokenCliente,
            tipoPerfil_idtipoPerfil: result[0].tipoPerfil_idtipoPerfil,
            users_documento: result[0].users_documento,
            respuesta: "Success"
        }
        logger.info('Se obtiene los datos', result, 'now!');
        callback(null, jsonObj)
    }).catch(function (error) {
        console.log('Fail');
        console.log(error);
        logger.error('Falla la obtención de datos', error, 'fail!')
        callback(null, {
            "respuesta": "No se puede tener acceso a datos."
        })
    })
}
// get one perfil
perfilModel.getOnePerfil = function (userData, callback) {
    console.log(userData)
    var query = session.query(cDB).where(
            cDB.idperfil.Equal(userData.idperfil)
        )

    query.then(function (result) {
        console.log('ok')
        var jsonObj = {
            id: result[0].idperfil,
            nombre: result[0].nombre,
            titulo: result[0].titulo,
            portafolio: result[0].portafolio,
            tokenCliente: result[0].tokenCliente,
            tipoPerfil_idtipoPerfil: result[0].tipoPerfil_idtipoPerfil,
            users_documento: result[0].users_documento,
            respuesta: "Success"
        }
        logger.info('Se obtiene los datos', result, 'now!');
        callback(null, jsonObj)
    }).catch(function (error) {
        console.log('Fail');
        console.log(error);
        logger.error('Falla la obtención de datos', error, 'fail!')
        callback(null, {
            "respuesta": "No se puede tener acceso a datos."
        })
    })
}
// create perfil
perfilModel.createPerfil = function (userData, callback) {

    let data = {
        nombre: userData.nombre,
        titulo: userData.titulo,
        portafolio: userData.portafolio,
        tokenCliente: userData.tokenCliente,
        tipoPerfil_idtipoPerfil: userData.tipoPerfil_idtipoPerfil,
        users_documento: userData.users_documento
    }
    
    cDB.Insert(data).then(function (result) {
        logger.info('Perfil Creado', result.affectedRows, 'now!');
        var jsonObj = {
            respuesta: "Success"
        }
        console.log(data);
        console.log(result);
        callback(null, jsonObj)
    }).catch(function (error) {
        console.log('Error: ' + error);
        logger.error('Error al crear el perfil', error, 'fail')
        console.log(result);
        callback(null, {
            "respuesta": "Error al registrar"
        })
    });
}
// update perfil
perfilModel.updatePerfil = function (userData, callback) {

    let sql = "UPDATE perfil SET nombre  = '" + userData.nombre   + "' , titulo = '" + userData.titulo + "' , portafolio= '" + userData.portafolio + "' ,  tokenCliente= '" + userData.tokenCliente + "' ,  tipoPerfil_idtipoPerfil= '" + userData.tipoPerfil_idtipoPerfil + "' ,  users_documento= '" + userData.users_documento + "'  where idperfil=" + userData.id + " ";
    let query = session.executeSql(sql);
    query.then(function(result) {
        var jsonObj = {
            respuesta: "Success"
        }
        callback(null, jsonObj)
        console.log(result); // array with result
    }).catch(function(error) {
        console.log('Error: ' + error);
        callback(null, {
            "respuesta": "Error al actualizar"
        })
    });
}
// delete perfil
perfilModel.deletePerfil = function (userData, callback) {
  
    let sql = "DELETE FROM perfil WHERE idperfil='" + userData.id + "' ";
    let query = session.executeSql(sql);
    query.then(function(result) {
        var jsonObj = {
            respuesta: "Success"
        }
        callback(null, jsonObj)
        console.log(result); // array with result
    }).catch(function(error) {
        console.log('Error: ' + error);
        callback(null, {
            "respuesta": "Error al eliminar"
        })
    });
}


module.exports = perfilModel;



