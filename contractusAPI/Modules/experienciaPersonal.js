const connection = require('./db/db')
const crypto = require('crypto');
const cDB = require('./shema/experienciaPersonal')
const db = require('./db/db');
const jsORM = require('js-hibernate');
const session = jsORM.session(db);
const env = require('dotenv')
env.config()
const secret = process.env.PASS_CONTRACTUS


connection.connect();

var experienciaPersonalModel = {}

// get all experence personal
experienciaPersonalModel.getExperienciaPersonal = function (userData, callback) {
    console.log(userData)
    var query = session.query(cDB)

    query.then(function (result) {
        console.log('ok')
        var jsonObj = {
            id: result[0].idexperienciaPersonal,
            fechaInicio: result[0].fechaInicio,
            fechaFinal: result[0].fechaFinal,
            lugarExperiencia: result[0].lugarExperiencia,
            funciones: result[0].funciones,
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
// get one experence personal
experienciaPersonalModel.getOneExperienciaPersonal = function (userData, callback) {
    console.log(userData)
    var query = session.query(cDB).where(
            cDB.idexperienciaPersonal.Equal(userData.idexperienciaPersonal)
        )

    query.then(function (result) {
        console.log('ok')
        var jsonObj = {
            id: result[0].idexperienciaPersonal,
            fechaInicio: result[0].fechaInicio,
            fechaFinal: result[0].fechaFinal,
            lugarExperiencia: result[0].lugarExperiencia,
            funciones: result[0].funciones,
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
// create experence personal
experienciaPersonalModel.createExperienciaPersonal = function (userData, callback) {

    let data = {
        fechaInicio: userData.fechaInicio,
        fechaFinal: userData.fechaFinal,
        lugarExperiencia: userData.lugarExperiencia,
        funciones: userData.funciones,
        users_documento: userData.users_documento
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
// update experence personal
experienciaPersonalModel.updateExperienciaPersonal = function (userData, callback) {

    let sql = "UPDATE experienciaPersonal SET fechaInicio  = '" + userData.fechaInicio   + "' , fechaFinal = '" + userData.fechaFinal + "' , lugarExperiencia= '" + userData.lugarExperiencia + "' ,  funciones= '" + userData.funciones + "' ,  users_documento= '" + userData.users_documento + "'  where idexperienciaPersonal=" + userData.id + " ";
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
// delete experence personal
experienciaPersonalModel.deleteExperienciaPersonal = function (userData, callback) {
  
    let sql = "DELETE FROM experienciaPersonal WHERE idexperienciaPersonal='" + userData.id + "' ";
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


module.exports = experienciaPersonalModel;



