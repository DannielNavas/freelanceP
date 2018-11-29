var express = require('express');
const jwt = require('express-jwt')
const env = require('dotenv')
env.config();
var router = express.Router();

const secret = { secret: process.env.PASS_SECURITY_API }

var experienciaPersonal = require('../Modules/experienciaPersonal')

router.post('/getdataexperienciapersonal', jwt(secret), (req, res, next) => {
    var userData = {
        idexperienciaPersonal: req.body.idexperienciaPersonal,
        fechaInicio: req.body.fechaInicio,
        fechaFinal: req.body.fechaFinal,
        lugarExperiencia: req.body.lugarExperiencia,
        funciones: req.body.funciones,
        users_documento: req.body.users_documento,
    }
    experienciaPersonal.getExperienciaPersonal(userData, (error, data) => {
        if (error) {
            res.status(504).jsonp({
                "error": error
            })
        } else {
            res.status(200).jsonp(data)
        }
    })
})

router.post('/getdataoneexperienciapersonal', jwt(secret), (req, res, next) => {
    var userData = {
        idexperienciaPersonal: req.body.idexperienciaPersonal,
        fechaInicio: req.body.fechaInicio,
        fechaFinal: req.body.fechaFinal,
        lugarExperiencia: req.body.lugarExperiencia,
        funciones: req.body.funciones,
        users_documento: req.body.users_documento,
    }
    experienciaPersonal.getOneExperienciaPersonal(userData, (error, data) => {
        if (error) {
            res.status(501).jsonp({
                "error": error
            })
        } else {
            res.status(200).jsonp(data)
        }
    })
})

router.post('/createexperienciapersonal', jwt(secret), (req, res, next) => {
    var userData = {
        idexperienciaPersonal: req.body.idexperienciaPersonal,
        fechaInicio: req.body.fechaInicio,
        fechaFinal: req.body.fechaFinal,
        lugarExperiencia: req.body.lugarExperiencia,
        funciones: req.body.funciones,
        users_documento: req.body.users_documento,
    }
    experienciaPersonal.createExperienciaPersonal(userData, (error, data) => {
        if (error) {
            res.status(504).jsonp({
                "error": error
            })
        } else {
            res.status(200).jsonp(data)
        }
    })
})

router.post('/updateexperienciapersonal', jwt(secret), (req, res, next) => {
    var userData = {
        idexperienciaPersonal: req.body.idexperienciaPersonal,
        fechaInicio: req.body.fechaInicio,
        fechaFinal: req.body.fechaFinal,
        lugarExperiencia: req.body.lugarExperiencia,
        funciones: req.body.funciones,
        users_documento: req.body.users_documento,
    }
    experienciaPersonal.updateExperienciaPersonal(userData, (error, data) => {
        if (error) {
            res.status(504).jsonp({
                "error": error
            })
        } else {
            res.status(200).jsonp(data)
        }
    })
})

router.post('/deleteexperienciapersonal', jwt(secret), (req, res, next) => {
    var userData = {
        idexperienciaPersonal: req.body.idexperienciaPersonal,
        fechaInicio: req.body.fechaInicio,
        fechaFinal: req.body.fechaFinal,
        lugarExperiencia: req.body.lugarExperiencia,
        funciones: req.body.funciones,
        users_documento: req.body.users_documento,
    }
    experienciaPersonal.deleteExperienciaPersonal(userData, (error, data) => {
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