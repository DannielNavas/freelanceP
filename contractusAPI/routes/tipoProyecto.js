var express = require('express');
const jwt = require('express-jwt')
const env = require('dotenv')
env.config();
var router = express.Router();

const secret = { secret: process.env.PASS_SECURITY_API }

var tipoProyecto = require('../Modules/tipoProyecto')

router.post('/getdatatipoproyecto', jwt(secret), (req, res, next) => {
    var userData = {
        id: req.body.id
    }
    tipoProyecto.getTipoProyecto(userData, jwt(secret), (error, data) => {
        if (error) {
            res.status(504).jsonp({
                "error": error
            })
        } else {
            res.status(200).jsonp(data)
        }
    })
})

router.post('/getdataonetipoproyecto', jwt(secret), (req, res, next) => {
    var userData = {
        idtipoProyecto: req.body.idtipoProyecto,
        tipoProyecto: req.body.tipoProyecto
    }
    tipoProyecto.getOneTipoProyecto(userData, (error, data) => {
        if (error) {
            res.status(501).jsonp({
                "error": error
            })
        } else {
            res.status(200).jsonp(data)
        }
    })
})

router.post('/createtipoproyecto', jwt(secret), (req, res, next) => {
    var userData = {
        idtipoProyecto: req.body.idtipoProyecto,
        tipoProyecto: req.body.tipoProyecto
    }
    tipoProyecto.createTipoProyecto(userData, (error, data) => {
        if (error) {
            res.status(504).jsonp({
                "error": error
            })
        } else {
            res.status(200).jsonp(data)
        }
    })
})

router.post('/updatetipoproyecto', jwt(secret), (req, res, next) => {
    var userData = {
        idtipoProyecto: req.body.idtipoProyecto,
        tipoProyecto: req.body.tipoProyecto
    }
    tipoProyecto.updateTipoProyecto(userData, (error, data) => {
        if (error) {
            res.status(504).jsonp({
                "error": error
            })
        } else {
            res.status(200).jsonp(data)
        }
    })
})

router.post('/deletetipoproyecto', jwt(secret), (req, res, next) => {
    var userData = {
        idtipoProyecto: req.body.idtipoProyecto,
        tipoProyecto: req.body.tipoProyecto
    }
    tipoProyecto.deleteTipoProyecto(userData, (error, data) => {
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