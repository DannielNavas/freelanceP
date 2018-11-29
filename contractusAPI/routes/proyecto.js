var express = require('express');
const jwt = require('express-jwt')
const env = require('dotenv')
env.config();
var router = express.Router();

const secret = { secret: process.env.PASS_SECURITY_API }

var proyecto = require('../Modules/proyecto')

router.post('/getdataproyecto', jwt(secret), (req, res, next) => {
    var userData = {
        idproyecto: req.body.idproyecto,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        presupuesto: req.body.presupuesto,
        tipoProyecto_idtipoProyecto: req.body.tipoProyecto_idtipoProyecto
    }
    proyecto.getProyecto(userData, (error, data) => {
        if (error) {
            res.status(504).jsonp({
                "error": error
            })
        } else {
            res.status(200).jsonp(data)
        }
    })
})

router.post('/getdataoneproyecto', jwt(secret), (req, res, next) => {
    var userData = {
        idproyecto: req.body.idproyecto,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        presupuesto: req.body.presupuesto,
        tipoProyecto_idtipoProyecto: req.body.tipoProyecto_idtipoProyecto
    }
    proyecto.getOneProyecto(userData, (error, data) => {
        if (error) {
            res.status(501).jsonp({
                "error": error
            })
        } else {
            res.status(200).jsonp(data)
        }
    })
})

router.post('/createproyecto', jwt(secret), (req, res, next) => {
    var userData = {
        idproyecto: req.body.idproyecto,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        presupuesto: req.body.presupuesto,
        tipoProyecto_idtipoProyecto: req.body.tipoProyecto_idtipoProyecto
    }
    proyecto.createProyecto(userData, (error, data) => {
        if (error) {
            res.status(504).jsonp({
                "error": error
            })
        } else {
            res.status(200).jsonp(data)
        }
    })
})

router.post('/updateproyecto', jwt(secret), (req, res, next) => {
    var userData = {
        idproyecto: req.body.idproyecto,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        presupuesto: req.body.presupuesto,
        tipoProyecto_idtipoProyecto: req.body.tipoProyecto_idtipoProyecto
    }
    proyecto.updateProyecto(userData, (error, data) => {
        if (error) {
            res.status(504).jsonp({
                "error": error
            })
        } else {
            res.status(200).jsonp(data)
        }
    })
})

router.post('/deleteproyecto', jwt(secret), (req, res, next) => {
    var userData = {
        idproyecto: req.body.idproyecto,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        presupuesto: req.body.presupuesto,
        tipoProyecto_idtipoProyecto: req.body.tipoProyecto_idtipoProyecto
    }
    proyecto.deleteProyecto(userData, (error, data) => {
        if (error) {
            res.status(504).jsonp({
                "error": error
            })
        } else {
            res.status(200).jsonp(data)
        }
    })
})

module.exports = router;