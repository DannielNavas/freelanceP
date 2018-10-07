const connection = require('./db/db')
const crypto = require('crypto');
const cDB = require('./shema/login')
const db = require('./db/db');
const jsORM = require('js-hibernate');
const session = jsORM.session(db);
const env = require('dotenv')
env.config()
const secret = process.env.PASS_CONTRACTUS
/*Logger
    'fatal', 'error', 'warn', 'info', 'debug'
*/
var logger = require('logger').createLogger('development.log'); // logs to a file




const loginModel = {}

loginModel.getUserLogin = function (userData, callback) {
    let pass = Buffer.from(userData.pass).toString('base64');
    let hash = crypto.createHmac('sha256', secret)
        .update(pass)
        .digest('hex');
        console
    console.log(hash);
    let query = session.query(cDB)
        .where(
            cDB.email.Equal(userData.email)
            .And()
            .pasword.Equal(hash)
        )
    query.then(function (result) {
        console.log('ok')
        logger.warn('login realizado', result, 'now!');
        var jsonObj = {
            id: result[0].idusers,
            user: result[0].user,
            email: result[0].email,
            pasword: result[0].pass,
            respuesta: "Success"
        }
        callback(null, jsonObj)
    }).catch(function (error) {
        console.log('Fail');
        logger.error('Falla login', error, 'error!');
        console.log(error);
        callback(null, {
            "respuesta": "Usuario y/o contraseña no son validos"
        })
        // console.log('Error: '+ error)
    })
}



loginModel.createUser = function (userData, callback) {
    let pass = Buffer.from(userData.password).toString('base64');
    let hash = crypto.createHmac('sha256', secret)
        .update(pass)
        .digest('hex');

    let data = {
        user: userData.user,
        email: userData.email,
        pasword: hash
    }
    
    cDB.Insert(data).then(function (result) {
        logger.info('Usuario creado', result.affectedRows, 'now!');
        var jsonObj = {
            respuesta: "Success"
        }
        console.log(data);
        console.log(result);
        callback(null, jsonObj)
    }).catch(function (error) {
        console.log('Error: ' + error);
        logger.error('Error al crear usuario', error, 'fail')
        console.log(result);
        callback(null, {
            "respuesta": "Error al registrar el usuario"
        })
    });
}


loginModel.updateUser = function (userData, callback) {
    let pass = Buffer.from(userData.pass).toString('base64');
    let hash = crypto.createHmac('sha256', secret)
        .update(pass)
        .digest('hex');
    let sql = "UPDATE users SET email = '" + userData.email + "' , user = '" + userData.user + "' , pasword= '" + hash + "'  where id=" + userData.id + " ";
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


loginModel.dataUser = function (userData, callback) {
    console.log(userData.id)
    var query = session.query(cDB)
        .where(
            cDB.idusers.Equal(userData.id)
        )
    query.then(function (result) {
        console.log('ok')
        var jsonObj = {
            id: result[0].idusers,
            user: result[0].user,
            email: result[0].email,
            pasword: result[0].pasword,
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
        // console.log('Error: '+ error)
    })


}

module.exports = loginModel;