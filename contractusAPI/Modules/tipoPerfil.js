const connection = require('./db/db')
const crypto = require('crypto');
const cDB = require('./shema/tipoPerfil')
const db = require('./db/db');
const jsORM = require('js-hibernate');
const session = jsORM.session(db);
const env = require('dotenv')
env.config()
const secret = process.env.PASS_CONTRACTUS


connection.connect();

var tipoPerfilModel = {}

// get all type perfil
tipoPerfilModel.getTipoPerfil = function (userData, callback) {
    console.log(userData)
    var query = session.query(cDB)

    query.then(function (result) {
        console.log('ok')
        var jsonObj = {
            id: result[0].idtipoPerfil,
            tipoPerfil: result[0].tipoPerfil,
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
// get one type perfil
tipoPerfilModel.getOneTipoPerfil = function (userData, callback) {
    console.log(userData)
    var query = session.query(cDB).where(
            cDB.idtipoPerfil.Equal(userData.idtipoPerfil)
        )

    query.then(function (result) {
        console.log('ok')
        var jsonObj = {
            id: result[0].idtipoPerfil,
            tipoPerfil: result[0].tipoPerfil,
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
// create type perfil
tipoPerfilModel.createTipoPerfil = function (userData, callback) {

    let data = {
        id: result[0].idtipoProyecto,
        tipoProyecto: result[0].tipoProyecto
    }
    
    cDB.Insert(data).then(function (result) {
        logger.info('Tipo Proyecto Creado', result.affectedRows, 'now!');
        var jsonObj = {
            respuesta: "Success"
        }
        console.log(data);
        console.log(result);
        callback(null, jsonObj)
    }).catch(function (error) {
        console.log('Error: ' + error);
        logger.error('Error al crear el tipo perfil', error, 'fail')
        console.log(result);
        callback(null, {
            "respuesta": "Error al crear"
        })
    });
}
// update type perfil
tipoPerfilModel.updateTipoPerfil = function (userData, callback) {
    
    let sql = "UPDATE tipoPerfil SET tipoPerfil  = '" + userData.tipoPerfil   + "'   where idtipoPerfil=" + userData.id + " ";
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
// delete type perfil
tipoPerfilModel.deleteTipoPerfil = function (userData, callback) {

    let sql = "DELETE FROM tipoPerfil WHERE idtipoPerfil='" + userData.id + "' ";
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


module.exports = tipoPerfilModel;



