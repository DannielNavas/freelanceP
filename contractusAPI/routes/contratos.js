var express = require('express');
const jwt = require('express-jwt')
const env = require('dotenv')
env.config();
var router = express.Router();

const secret = { secret: process.env.PASS_SECURITY_API }

var contratos = require('../Modules/contratos')

router.post('/getdatacontratos', jwt(secret), (req, res, next) => {
    var userData = {
        idcontratos: req.body.idcontratos,
        tokenCliente: req.body.tokenCliente,
        users_documento: req.body.users_documento
    }
    contratos.getContratos(userData, (error, data) => {
        if (error) {
            res.status(504).jsonp({
                "error": error
            })
        } else {
            res.status(200).jsonp(data)
        }
    })
})

router.post('/getdataonecontratos', jwt(secret), (req, res, next) => {
    var userData = {
        idcontratos: req.body.idcontratos,
        tokenCliente: req.body.tokenCliente,
        users_documento: req.body.users_documento
    }
    contratos.getOneContratos(userData, (error, data) => {
        if (error) {
            res.status(501).jsonp({
                "error": error
            })
        } else {
            res.status(200).jsonp(data)
        }
    })
})

router.post('/createcontratos', jwt(secret), (req, res, next) => {
    var userData = {
        idcontratos: req.body.idcontratos,
        tokenCliente: req.body.tokenCliente,
        users_documento: req.body.users_documento
    }
    contratos.createContratos(userData, (error, data) => {
        if (error) {
            res.status(504).jsonp({
                "error": error
            })
        } else {
            res.status(200).jsonp(data)
        }
    })
})

router.post('/updatecontratos', jwt(secret), (req, res, next) => {
    var userData = {
        idcontratos: req.body.idcontratos,
        tokenCliente: req.body.tokenCliente,
        users_documento: req.body.users_documento
    }
    contratos.updateContratos(userData, (error, data) => {
        if (error) {
            res.status(504).jsonp({
                "error": error
            })
        } else {
            res.status(200).jsonp(data)
        }
    })
})

router.post('/deletecontratos', jwt(secret), (req, res, next) => {
    var userData = {
        idcontratos: req.body.idcontratos,
        tokenCliente: req.body.tokenCliente,
        users_documento: req.body.users_documento
    }
    contratos.deleteContratos(userData, (error, data) => {
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