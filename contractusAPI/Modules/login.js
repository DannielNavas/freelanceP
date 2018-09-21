const connection = require('./db/db')
const crypto = require('crypto');
const env = require('dotenv')
env.config()
const secret = process.env.PASS_CONTRACTUS

connection.connect();

var loginModel = {}

loginModel.getUserLogin = function (userData, callback) {
  let pass = Buffer.from(userData.pass).toString('base64');
  let hash = crypto.createHmac('sha256',secret)
    .update(pass)
    .digest('hex');
  var query = "select id, email, pass from users where email = '" + userData.email + "' and pass = '" + hash + "'"
  if (connection) {
    connection.query(query, function (error, rows) {
      if (error) {
        console.log(error)
        callback(null, {
          "respuesta": "Error de conexión"
        })
      } else {
        if (rows.length != 0) {
          var jsonObj = {
            rows,
            respuesta: "Success"
          }
          callback(null, jsonObj)
        } else {
          console.log("Error la consulta no arroja datos")
          callback(null, {
            "respuesta": "Usuario y/o contraseña no son validos"
          })
        }
      }
    })
  } else {
    console.log("No se conecto con servidor")
    callback(null, {
      "Respuesta": "Error en Conexion"
    })
  }

}



loginModel.createUser = function (userData, callback) {
  let pass = Buffer.from(userData.pass).toString('base64');
  let hash = crypto.createHmac('sha256',secret)
    .update(pass)
    .digest('hex');
  var query = 'insert into users (email, user, pass) values ("' + userData.email + '","' + userData.user + '","' + hash + '");';
  if (connection) {
    connection.query(query, function (error, rows) {
      if (error) {
        console.log(error)
        callback(null, {
          "respuesta": "Error de conexión"
        })
      } else {
        if (rows.length != 0) {
          var jsonObj = {
            respuesta: "Success"
          }
          callback(null, jsonObj)
        } else {
          console.log("Error la consulta no arroja datos")
          callback(null, {
            "respuesta": "Usuario y/o contraseña no son validos"
          })
        }
      }
    })
  } else {
    console.log("No se conecto con servidor")
    callback(null, {
      "Respuesta": "Error en Conexion"
    })
  }
}


loginModel.updateUser = function (userData, callback) {
  let pass = Buffer.from(userData.pass).toString('base64');
  let hash = crypto.createHmac('sha256',secret)
    .update(pass)
    .digest('hex');
  var query = "UPDATE users SET email = '" + userData.email + "' , user = '" + userData.user + "' , pass= '" + pass + "'  where id=" + userData.id + " ";
  if (connection) {
    connection.query(query, function (error, rows) {
      if (error) {
        console.log(error)
        callback(null, {
          "respuesta": "Error de conexión"
        })
      } else {
        if (rows.length != 0) {
          var jsonObj = {
            respuesta: "Success"
          }
          callback(null, jsonObj)
        } else {
          console.log("Error")
          callback(null, {
            "respuesta": "Error al actualizar"
          })
        }
      }
    })
  } else {
    console.log("No se conecto con servidor")
    callback(null, {
      "Respuesta": "Error en Conexion"
    })
  }
}


loginModel.dataUser = function (userData, callback) {
  var query = 'select * from users where id = ' + userData.id;
  if (connection) {
    connection.query(query, function (error, rows) {
      if (error) {
        console.log(error)
        callback(null, {
          "respuesta": "Error de conexión"
        })
      } else {
        if (rows.length != 0) {
          var jsonObj = {
            rows,
            respuesta: "Success"
          }
          callback(null, jsonObj)
        } else {
          console.log("Error la consulta no arroja datos")
          callback(null, {
            "respuesta": "Usuario y/o contraseña no son validos"
          })
        }
      }
    })
  } else {
    console.log("No se conecto con servidor")
    callback(null, {
      "Respuesta": "Error en Conexion"
    })
  }
}

module.exports = loginModel;