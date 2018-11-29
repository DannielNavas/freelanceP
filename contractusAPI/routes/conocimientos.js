var express = require('express');
const jwt = require('express-jwt')
const env = require('dotenv')
env.config();
var router = express.Router();

const secret = { secret: process.env.PASS_SECURITY_API }

var conocimientos = require('../Modules/conocimientos')

router.post('/getdatacontratos', jwt(secret), (req, res, next) => {
    var userData = {
        idconocimientos: req.body.idconocimientos,
        conocimientos: req.body.conocimientos,
        valoracion: req.body.valoracion,
        users_documento: req.body.users_documento
    }
    conocimientos.getConocimientos(userData, (error, data) => {
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
        idconocimientos: req.body.idconocimientos,
        conocimientos: req.body.conocimientos,
        valoracion: req.body.valoracion,
        users_documento: req.body.users_documento
    }
    conocimientos.getOneConocimientos(userData, (error, data) => {
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
        idconocimientos: req.body.idconocimientos,
        conocimientos: req.body.conocimientos,
        valoracion: req.body.valoracion,
        users_documento: req.body.users_documento
    }
    conocimientos.createConocimientos(userData, (error, data) => {
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
        idconocimientos: req.body.idconocimientos,
        conocimientos: req.body.conocimientos,
        valoracion: req.body.valoracion,
        users_documento: req.body.users_documento
    }
    conocimientos.updateConocimientos(userData, (error, data) => {
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
        idconocimientos: req.body.idconocimientos,
        conocimientos: req.body.conocimientos,
        valoracion: req.body.valoracion,
        users_documento: req.body.users_documento
    }
    conocimientos.deleteConocimientos(userData, (error, data) => {
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