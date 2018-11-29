var express = require('express');
const jwt = require('express-jwt')
const env = require('dotenv')
env.config();
var router = express.Router();

const secret = { secret: process.env.PASS_SECURITY_API }

var experienciaContractus = require('../Modules/experienciaContractus')

router.post('/getdataexperienciacontractus', jwt(secret), (req, res, next) => {
    var userData = {
        idexperienciaContractus: req.body.idexperienciaContractus,
        fechaInicio: req.body.fechaInicio,
        fechaFinal: req.body.fechaFinal,
        cliente: req.body.cliente,
        tipoProyecto_idtipoProyecto: req.body.tipoProyecto_idtipoProyecto
    }
    experienciaContractus.getExperienciaContractus(userData, (error, data) => {
        if (error) {
            res.status(504).jsonp({
                "error": error
            })
        } else {
            res.status(200).jsonp(data)
        }
    })
})

router.post('/getdataoneexperienciacontractus', jwt(secret), (req, res, next) => {
    var userData = {
        idexperienciaContractus: req.body.idexperienciaContractus,
        fechaInicio: req.body.fechaInicio,
        fechaFinal: req.body.fechaFinal,
        cliente: req.body.cliente,
        tipoProyecto_idtipoProyecto: req.body.tipoProyecto_idtipoProyecto
    }
    experienciaContractus.getOneExperienciaContractus(userData, (error, data) => {
        if (error) {
            res.status(501).jsonp({
                "error": error
            })
        } else {
            res.status(200).jsonp(data)
        }
    })
})

router.post('/createexperienciacontractus', jwt(secret), (req, res, next) => {
    var userData = {
        idexperienciaContractus: req.body.idexperienciaContractus,
        fechaInicio: req.body.fechaInicio,
        fechaFinal: req.body.fechaFinal,
        cliente: req.body.cliente,
        tipoProyecto_idtipoProyecto: req.body.tipoProyecto_idtipoProyecto
    }
    experienciaContractus.createExperienciaContractus(userData, (error, data) => {
        if (error) {
            res.status(504).jsonp({
                "error": error
            })
        } else {
            res.status(200).jsonp(data)
        }
    })
})

router.post('/updateexperienciacontractus', jwt(secret), (req, res, next) => {
    var userData = {
        idexperienciaContractus: req.body.idexperienciaContractus,
        fechaInicio: req.body.fechaInicio,
        fechaFinal: req.body.fechaFinal,
        cliente: req.body.cliente,
        tipoProyecto_idtipoProyecto: req.body.tipoProyecto_idtipoProyecto
    }
    experienciaContractus.updateExperienciaContractus(userData, (error, data) => {
        if (error) {
            res.status(504).jsonp({
                "error": error
            })
        } else {
            res.status(200).jsonp(data)
        }
    })
})

router.post('/deleteexperienciacontractus', jwt(secret), (req, res, next) => {
    var userData = {
        idexperienciaContractus: req.body.idexperienciaContractus,
        fechaInicio: req.body.fechaInicio,
        fechaFinal: req.body.fechaFinal,
        cliente: req.body.cliente,
        tipoProyecto_idtipoProyecto: req.body.tipoProyecto_idtipoProyecto
    }
    experienciaContractus.deleteExperienciaContractus(userData, (error, data) => {
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