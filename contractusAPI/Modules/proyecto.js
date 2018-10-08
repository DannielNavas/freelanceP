const connection = require('./db/db')
const crypto = require('crypto');
const cDB = require('./shema/proyecto')
const db = require('./db/db');
const jsORM = require('js-hibernate');
const session = jsORM.session(db);
const env = require('dotenv')
env.config()
const secret = process.env.PASS_CONTRACTUS


connection.connect();

var proyectoModel = {}

// get all project
proyectoModel.getProyecto = function (userData, callback) {
    console.log(userData)
    var query = session.query(cDB)

    query.then(function (result) {
        console.log('ok')
        var jsonObj = {
            id: result[0].idproyecto,
            nombre: result[0].nombre,
            descripcion: result[0].descripcion,
            presupuesto: result[0].presupuesto,
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
// get one project
proyectoModel.getOneProyecto = function (userData, callback) {
    console.log(userData)
    var query = session.query(cDB).where(
            cDB.idproyecto.Equal(userData.idproyecto)
        )

    query.then(function (result) {
        console.log('ok')
        var jsonObj = {
            id: result[0].idproyecto,
            nombre: result[0].nombre,
            descripcion: result[0].descripcion,
            presupuesto: result[0].presupuesto,
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
// create project
proyectoModel.createProyecto = function (userData, callback) {

    let data = {
        nombre: userData.nombre,
        descripcion: userData.descripcion,
        presupuesto: userData.presupuesto,
        tipoProyecto_idtipoProyecto: userData.tipoProyecto_idtipoProyecto
    }
    
    cDB.Insert(data).then(function (result) {
        logger.info('Proyecto Creado', result.affectedRows, 'now!');
        var jsonObj = {
            respuesta: "Success"
        }
        console.log(data);
        console.log(result);
        callback(null, jsonObj)
    }).catch(function (error) {
        console.log('Error: ' + error);
        logger.error('Error al crear el proyecto', error, 'fail')
        console.log(result);
        callback(null, {
            "respuesta": "Error al registrar"
        })
    });
}
// update project
proyectoModel.updateProyecto = function (userData, callback) {

    let sql = "UPDATE proyecto SET nombre  = '" + userData.nombre   + "' , descripcion = '" + userData.descripcion + "' , presupuesto= '" + userData.presupuesto + "' ,  tipoProyecto_idtipoProyecto= '" + userData.tipoProyecto_idtipoProyecto + "'  where idproyecto=" + userData.id + " ";
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
// delete project
proyectoModel.deleteProyecto = function (userData, callback) {
  
    let sql = "DELETE FROM proyecto WHERE idproyecto='" + userData.id + "' ";
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


module.exports = proyectoModel;



