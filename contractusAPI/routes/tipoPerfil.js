var express = require('express');
const jwt = require('express-jwt')
const env = require('dotenv')
env.config();
var router = express.Router();

const secret = { secret: process.env.PASS_SECURITY_API }

var tipoPerfil = require('../Modules/tipoPerfil')

router.post('/getdatatipoperfil', jwt(secret), (req, res, next) => {
    var userData = {
        idtipoPerfil: req.body.idtipoPerfil
    }
    tipoPerfil.getTipoPerfil(userData, (error, data) => {
        if (error) {
            res.status(504).jsonp({
                "error": error
            })
        } else {
            res.status(200).jsonp(data)
        }
    })
})

router.post('/getdataonetipoperfil', jwt(secret), (req, res, next) => {
    var userData = {
        idtipoPerfil: req.body.idtipoPerfil,
        tipoPerfil: req.body.tipoPerfil
    }
    tipoPerfil.getOneTipoPerfil(userData, (error, data) => {
        if (error) {
            res.status(501).jsonp({
                "error": error
            })
        } else {
            res.status(200).jsonp(data)
        }
    })
})

router.post('/createtipoperfil', jwt(secret), (req, res, next) => {
    var userData = {
        idtipoPerfil: req.body.idtipoPerfil,
        tipoPerfil: req.body.tipoPerfil
    }
    tipoPerfil.createTipoPerfil(userData, (error, data) => {
        if (error) {
            res.status(504).jsonp({
                "error": error
            })
        } else {
            res.status(200).jsonp(data)
        }
    })
})

router.post('/updatetipoperfil', jwt(secret), (req, res, next) => {
    var userData = {
        idtipoPerfil: req.body.idtipoPerfil,
        tipoPerfil: req.body.tipoPerfil
    }
    tipoPerfil.updateTipoPerfil(userData, (error, data) => {
        if (error) {
            res.status(504).jsonp({
                "error": error
            })
        } else {
            res.status(200).jsonp(data)
        }
    })
})

router.post('/deletetipoperfil', jwt(secret), (req, res, next) => {
    var userData = {
        idtipoPerfil: req.body.idtipoPerfil,
        tipoPerfil: req.body.tipoPerfil
    }
    tipoPerfil.deleteTipoPerfil(userData, (error, data) => {
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