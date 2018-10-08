const connection = require('./db/db')
const crypto = require('crypto');
const cDB = require('./shema/conocimientos')
const db = require('./db/db');
const jsORM = require('js-hibernate');
const session = jsORM.session(db);
const env = require('dotenv')
env.config()
const secret = process.env.PASS_CONTRACTUS


connection.connect();

var conocimientosModel = {}

// get all contracts
conocimientosModel.getConocimientos = function (userData, callback) {
    console.log(userData)
    var query = session.query(cDB)

    query.then(function (result) {
        console.log('ok')
        var jsonObj = {
            id: result[0].idconocimientos,
            conocimientos: result[0].conocimientos,
            valoracion: result[0].valoracion,
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
// get one contracts
conocimientosModel.getOneConocimientos = function (userData, callback) {
    console.log(userData)
    var query = session.query(cDB).where(
            cDB.idconocimientos.Equal(userData.idconocimientos)
        )

    query.then(function (result) {
        console.log('ok')
        var jsonObj = {
            id: result[0].idconocimientos,
            conocimientos: result[0].conocimientos,
            valoracion: result[0].valoracion,
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
// create contracts
conocimientosModel.createConocimientos = function (userData, callback) {

    let data = {
        id: result[0].idconocimientos,
        conocimientos: result[0].conocimientos,
        valoracion: result[0].valoracion,
        users_documento: result[0].users_documento
    }
    
    cDB.Insert(data).then(function (result) {
        logger.info('Conocimiento Creado', result.affectedRows, 'now!');
        var jsonObj = {
            respuesta: "Success"
        }
        console.log(data);
        console.log(result);
        callback(null, jsonObj)
    }).catch(function (error) {
        console.log('Error: ' + error);
        logger.error('Error al crear el conocimiento', error, 'fail')
        console.log(result);
        callback(null, {
            "respuesta": "Error al crear"
        })
    });
}
// update contracts
conocimientosModel.updateConocimientos = function (userData, callback) {
    
    let sql = "UPDATE conocimientos SET conocimientos= '" + userData.conocimientos + "' , valoracion= '" + userData.valoracion + "' , users_documento= '" + userData.users_documento + "'   where idconocimientos=" + userData.id + " ";
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
// delete contracts
conocimientosModel.deleteConocimientos = function (userData, callback) {

    let sql = "DELETE FROM conocimientos WHERE idconocimientos='" + userData.id + "' ";
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


module.exports = conocimientosModel;



