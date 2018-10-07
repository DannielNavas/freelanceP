const connection = require('./db/db')
const crypto = require('crypto');
const cDB = require('./shema/tipoProyecto')
const db = require('./db/db');
const jsORM = require('js-hibernate');
const session = jsORM.session(db);
const env = require('dotenv')
env.config()
const secret = process.env.PASS_CONTRACTUS


connection.connect();

var tipoProyectoModel = {}

// get all type project
tipoProyectoModel.getTipoProyecto = function (userData, callback) {
    console.log(userData)
    var query = session.query(cDB)

    query.then(function (result) {
        console.log('ok')
        var jsonObj = {
            id: result[0].idtipoProyecto,
            tipoProyecto: result[0].tipoProyecto,
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
// get one type project
tipoProyectoModel.getOneTipoProyecto = function (userData, callback) {
    console.log(userData)
    var query = session.query(cDB).where(
            cDB.idtipoProyecto.Equal(userData.idtipoProyecto)
        )

    query.then(function (result) {
        console.log('ok')
        var jsonObj = {
            id: result[0].idtipoProyecto,
            tipoProyecto: result[0].tipoProyecto,
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
// create type project
tipoProyectoModel.createTipoProyecto = function (userData, callback) {

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
        logger.error('Error al crear el tipo proyecto', error, 'fail')
        console.log(result);
        callback(null, {
            "respuesta": "Error al crear"
        })
    });
}
// update type project
tipoProyectoModel.updateTipoProyecto = function (userData, callback) {

    let sql = "UPDATE tipoProyecto SET tipoProyecto  = '" + userData.tipoProyecto   + "'   where idtipoProyecto=" + userData.id + " ";
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
// delete type project
tipoProyectoModel.deleteTipoProyecto = function (userData, callback) {
    
    let sql = "DELETE FROM tipoProyecto WHERE idtipoProyecto='" + userData.id + "' ";
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


module.exports = tipoProyectoModel;



