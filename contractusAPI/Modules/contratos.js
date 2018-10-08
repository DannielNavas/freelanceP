const connection = require('./db/db')
const crypto = require('crypto');
const cDB = require('./shema/contratos')
const db = require('./db/db');
const jsORM = require('js-hibernate');
const session = jsORM.session(db);
const env = require('dotenv')
env.config()
const secret = process.env.PASS_CONTRACTUS


connection.connect();

var contratosModel = {}

// get all contracts
contratosModel.getContratos = function (userData, callback) {
    console.log(userData)
    var query = session.query(cDB)

    query.then(function (result) {
        console.log('ok')
        var jsonObj = {
            id: result[0].idcontratos,
            tokenCliente: result[0].tokenCliente,
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
contratosModel.getOneContratos = function (userData, callback) {
    console.log(userData)
    var query = session.query(cDB).where(
            cDB.idcontratos.Equal(userData.idcontratos)
        )

    query.then(function (result) {
        console.log('ok')
        var jsonObj = {
            id: result[0].idcontratos,
            tokenCliente: result[0].tokenCliente,
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
contratosModel.createContratos = function (userData, callback) {

    let data = {
        id: result[0].idcontratos,
        tokenCliente: result[0].tokenCliente,
        users_documento: result[0].users_documento
    }
    
    cDB.Insert(data).then(function (result) {
        logger.info('Contrato Creado', result.affectedRows, 'now!');
        var jsonObj = {
            respuesta: "Success"
        }
        console.log(data);
        console.log(result);
        callback(null, jsonObj)
    }).catch(function (error) {
        console.log('Error: ' + error);
        logger.error('Error al crear el contrato', error, 'fail')
        console.log(result);
        callback(null, {
            "respuesta": "Error al crear"
        })
    });
}
// update contracts
contratosModel.updateContratos = function (userData, callback) {
    
    let sql = "UPDATE contratos SET tokenCliente= '" + userData.tokenCliente + "' , users_documento= '" + userData.users_documento   + "'   where idcontratos=" + userData.id + " ";
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
contratosModel.deleteContratos = function (userData, callback) {

    let sql = "DELETE FROM contratos WHERE idcontratos='" + userData.id + "' ";
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


module.exports = contratosModel;



