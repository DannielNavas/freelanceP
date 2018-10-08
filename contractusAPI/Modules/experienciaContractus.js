const connection = require('./db/db')
const crypto = require('crypto');
const cDB = require('./shema/experienciaContractus')
const db = require('./db/db');
const jsORM = require('js-hibernate');
const session = jsORM.session(db);
const env = require('dotenv')
env.config()
const secret = process.env.PASS_CONTRACTUS


connection.connect();

var experienciaContractusModel = {}

// get all experence contract
experienciaContractusModel.getExperienciaContractus = function (userData, callback) {
    console.log(userData)
    var query = session.query(cDB)

    query.then(function (result) {
        console.log('ok')
        var jsonObj = {
            id: result[0].idexperienciaContractus,
            fechaInicio: result[0].fechaInicio,
            fechaFinal: result[0].fechaFinal,
            cliente: result[0].cliente,
            tipoProyecto_idtipoProyecto: result[0].tipoProyecto_idtipoProyecto,
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
// get one experence contract
experienciaContractusModel.getOneExperienciaContractus = function (userData, callback) {
    console.log(userData)
    var query = session.query(cDB).where(
            cDB.idexperienciaContractus.Equal(userData.idexperienciaContractus)
        )

    query.then(function (result) {
        console.log('ok')
        var jsonObj = {
            id: result[0].idexperienciaContractus,
            fechaInicio: result[0].fechaInicio,
            fechaFinal: result[0].fechaFinal,
            cliente: result[0].cliente,
            tipoProyecto_idtipoProyecto: result[0].tipoProyecto_idtipoProyecto,
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
// create experence contract
experienciaContractusModel.createExperienciaContractus = function (userData, callback) {

    let data = {
        fechaInicio: userData.fechaInicio,
        fechaFinal: userData.fechaFinal,
        cliente: userData.cliente,
        tipoProyecto_idtipoProyecto: userData.tipoProyecto_idtipoProyecto
    }
    
    cDB.Insert(data).then(function (result) {
        logger.info('Experiencia Creada', result.affectedRows, 'now!');
        var jsonObj = {
            respuesta: "Success"
        }
        console.log(data);
        console.log(result);
        callback(null, jsonObj)
    }).catch(function (error) {
        console.log('Error: ' + error);
        logger.error('Error al crear la experiencia', error, 'fail')
        console.log(result);
        callback(null, {
            "respuesta": "Error al registrar"
        })
    });
}
// update experence contract
experienciaContractusModel.updateExperienciaContractus = function (userData, callback) {

    let sql = "UPDATE experienciaContractus SET fechaInicio  = '" + userData.fechaInicio   + "' , fechaFinal = '" + userData.fechaFinal + "' , cliente= '" + userData.cliente + "' ,  tipoProyecto_idtipoProyecto= '" + userData.tipoProyecto_idtipoProyecto + "'  where idexperienciaContractus=" + userData.id + " ";
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
// delete experence contract
experienciaContractusModel.deleteExperienciaContractus = function (userData, callback) {
  
    let sql = "DELETE FROM experienciaContractus WHERE idexperienciaContractus='" + userData.id + "' ";
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


module.exports = experienciaContractusModel;



