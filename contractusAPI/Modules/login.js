var mysql = require('mysql')
var enigma = require('enigma-code')

const valorEncriptación = 10
let key = 'Odin2019C'

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "contractus"
})

connection.connect();

var loginModel = {}

loginModel.getUserLogin = function (userData, callback) {
  var pass;
  enigma.genHash(valorEncriptación, key, userData.pass, function (error, hash) {
    if (error) return console.error(error)
    pass = hash
  })
  var query = "select id, email, pass from users where email = '" + userData.email + "' and pass = '" + pass + "'"
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
  var pass;
  enigma.genHash(valorEncriptación, key, userData.password, function (error, hash) {
    if (error) return console.error(error)
    pass = hash
  })
  var query = 'insert into users (email, user, pass) values ("' + userData.email + '","' + userData.user + '","' + pass + '");';
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