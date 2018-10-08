const connection = require('./db/db')
const crypto = require('crypto');
const cDB = require('./shema/participantesProyecto')
const db = require('./db/db');
const jsORM = require('js-hibernate');
const session = jsORM.session(db);
const env = require('dotenv')
env.config()
const secret = process.env.PASS_CONTRACTUS


connection.connect();

var participantesProyectoModel = {}

// get all participantes project
participantesProyectoModel.getParticipantesProyecto = function (userData, callback) {
    console.log(userData)
    var query = session.query(cDB)

    query.then(function (result) {
        console.log('ok')
        var jsonObj = {
            id: result[0].idparticipantesProyecto,
            proyecto_idproyecto: result[0].proyecto_idproyecto,
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
// get one participantes project
participantesProyectoModel.getOneParticipantesProyecto = function (userData, callback) {
    console.log(userData)
    var query = session.query(cDB).where(
            cDB.idparticipantesProyecto.Equal(userData.idparticipantesProyecto)
        )

    query.then(function (result) {
        console.log('ok')
         var jsonObj = {
            id: result[0].idparticipantesProyecto,
            proyecto_idproyecto: result[0].proyecto_idproyecto,
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
// create participantes project
participantesProyectoModel.createParticipantesProyecto = function (userData, callback) {

    let data = {
        id: result[0].idparticipantesProyecto,
        proyecto_idproyecto: result[0].proyecto_idproyecto,
        users_documento: result[0].users_documento
    }
    
    cDB.Insert(data).then(function (result) {
        logger.info('Participante Proyecto Creado', result.affectedRows, 'now!');
        var jsonObj = {
            respuesta: "Success"
        }
        console.log(data);
        console.log(result);
        callback(null, jsonObj)
    }).catch(function (error) {
        console.log('Error: ' + error);
        logger.error('Error al crear el participante del proyecto', error, 'fail')
        console.log(result);
        callback(null, {
            "respuesta": "Error al crear"
        })
    });
}
// update participantes project
participantesProyectoModel.updateParticipantesProyecto = function (userData, callback) {
    
    let sql = "UPDATE participantesProyecto SET proyecto_idproyecto  = '" + userData.proyecto_idproyecto   + "' , users_documento  = '" + userData.users_documento   + "'   where idparticipantesProyecto=" + userData.id + " ";
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
// delete participantes project
participantesProyectoModel.deleteParticipantesProyecto = function (userData, callback) {

    let sql = "DELETE FROM participantesProyecto WHERE idparticipantesProyecto='" + userData.id + "' ";
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


module.exports = participantesProyectoModel;



