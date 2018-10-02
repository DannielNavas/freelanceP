const connection = require('./db/db')
const crypto = require('crypto');
const cDB = require('./shema/shema')
const db = require('./db/db');

var jsORM = require('js-hibernate');
var session = jsORM.session(db);

const env = require('dotenv')
env.config()
const secret = process.env.PASS_CONTRACTUS


var loginModel = {}

loginModel.getUserLogin = function (userData, callback) {
    let pass = Buffer.from(userData.pass).toString('base64');
    let hash = crypto.createHmac('sha256', secret)
        .update(pass)
        .digest('hex');
    console.log(hash);
    var query = session.query(cDB)
        .where(
            cDB.email.Equal(userData.email)
            .And()
            .pass.Equal(hash)
        )
    query.then(function (result) {
        console.log('ok')
        var jsonObj = {
            id: result[0].id,
            user: result[0].user,
            email: result[0].email,
            pass: result[0].pass,
            respuesta: "Success"
        }
        callback(null, jsonObj)
    }).catch(function (error) {
        console.log('Fail');
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

    var data = {
        user: userData.user,
        email: userData.email,
        pass: hash
    }
    
    cDB.Insert(data).then(function (result) {
        console.log('inserted: ' + result.affectedRows);
        var jsonObj = {
            respuesta: "Success"
        }
        console.log(data);
        console.log(result);
        callback(null, jsonObj)
    }).catch(function (error) {
        console.log('Error: ' + error);
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
    let sql = "UPDATE users SET email = '" + userData.email + "' , user = '" + userData.user + "' , pass= '" + hash + "'  where id=" + userData.id + " ";
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
            cDB.id.Equal(userData.id)
        )
    query.then(function (result) {
        console.log('ok')
        var jsonObj = {
            id: result[0].id,
            user: result[0].user,
            email: result[0].email,
            pass: result[0].pass,
            respuesta: "Success"
        }
        callback(null, jsonObj)
    }).catch(function (error) {
        console.log('Fail');
        console.log(error);
        callback(null, {
            "respuesta": "No se puede tener acceso a datos."
        })
        // console.log('Error: '+ error)
    })


}

module.exports = loginModel;