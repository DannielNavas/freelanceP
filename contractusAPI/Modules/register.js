const connection = require('./db/db')
const crypto = require('crypto');
const cDB = require('./shema/login')
const db = require('./db/db');
const jsORM = require('js-hibernate');
const session = jsORM.session(db);
const env = require('dotenv')
env.config()
const secret = process.env.PASS_CONTRACTUS

connection.connect();

var registerModel = {}

// get all users register
registerModel.getUserRegister = function (userData, callback) {
    console.log(userData)
    var query = session.query(cDB)

    query.then(function (result) {
        console.log('ok')
        var jsonObj = {
            id: result[0].idusers,
            user: result[0].user,
            email: result[0].email,
            pasword: result[0].pasword,
            document: result[0].documento,
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
// get one user register
registerModel.getUserOneRegister = function (userData, callback) {
    console.log(userData)
    var query = session.query(cDB).where(
            cDB.idusers.Equal(userData.idusers)
        )

    query.then(function (result) {
        console.log('ok')
        var jsonObj = {
            id: result[0].idusers,
            user: result[0].user,
            email: result[0].email,
            pasword: result[0].pasword,
            document: result[0].documento,
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
// create users register
registerModel.createUsersRegister = function (userData, callback) {
    let pass = Buffer.from(userData.password).toString('base64');
    let hash = crypto.createHmac('sha256', secret)
        .update(pass)
        .digest('hex');

    let data = {
        user: userData.user,
        email: userData.email,
        pasword: hash,
        document: userData.documento
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
            "respuesta": "Error al registrar"
        })
    });
}
//update user register
registerModel.updateUsersRegister = function (userData, callback) {
    let pass = Buffer.from(userData.pass).toString('base64');
    let hash = crypto.createHmac('sha256', secret)
        .update(pass)
        .digest('hex');
    let sql = "UPDATE users SET email = '" + userData.email + "' , user = '" + userData.user + "' , pasword= '" + hash + "' ,  documento= '" + userData.documento + "'  where idusers=" + userData.id + " ";
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
// delete users register
registerModel.deleteUsersRegister = function (userData, callback) {
    let pass = Buffer.from(userData.pass).toString('base64');
    let hash = crypto.createHmac('sha256', secret)
        .update(pass)
        .digest('hex');
    let sql = "DELETE FROM users WHERE idusers='" + userData.id + "' ";
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




module.exports = registerModel;



