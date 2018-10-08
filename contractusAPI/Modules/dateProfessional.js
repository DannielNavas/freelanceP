var connection = require('./db/db')

connection.connect();

var dateProfessionalModel = {}

// get 
registerModel.getDateProfessional = function (userData, callback) {
    console.log(userData)
    var query = "select * from dates_professional "

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
                        "respuesta": "Error los datos profesionales no se pueden consultar "
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


// create 
registerModel.createDateProfessional = function (userData, callback) {
    console.log(userData)
    var query = "INSERT INTO dates_professional (universidad, titulo, numero_diploma, acta_grado, folio, fecha, otros) VALUES  ('" + userData.universidad + "',  '" + userData.titulo + "',  " + userData.numerodiploma + ",  " + userData.actagrado + ",  " + userData.folio + ",  '" + userData.fecha + "',  '" + userData.otros + "') "

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
                        "respuesta": "Error los datos  profesionales no se pueden crear "
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


// update users register
registerModel.updateUsersRegister = function (userData, callback) {
    console.log(userData)
    var query = "UPDATE dates_professional SET universidad = '" + userData.universidad + "' , titulo= '" + userData.titulo + "' , numero_diploma= " + userData.numerodiploma + ", acta_grado= " + userData.actagrado + ", folio= " + userData.folio + ", fecha= '" + userData.fecha + "',   otros= '" + userData.otros + "'  where id='" + userData.id + "' "

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
                        "respuesta": "Error los datos  profesionales no se pueden actualizar "
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


// delete users register
registerModel.deleteUsersRegister = function (userData, callback) {
    console.log(userData)
    var query = "DELETE FROM dates_professional WHERE id='" + userData.id + "' "

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
                        "respuesta": "Error los datos  profesionales no se pueden eliminar "
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

module.exports = registerModel;
