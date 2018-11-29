var express = require('express');
const jwt = require('express-jwt')
const env = require('dotenv')
env.config();
var router = express.Router();

const secret = { secret: process.env.PASS_SECURITY_API }

var perfil = require('../Modules/perfil')

router.post('/getdataperfil', jwt(secret), (req, res, next) => {
    var userData = {
        idperfil: req.body.idperfil,
        nombre: req.body.nombre,
        titulo: req.body.titulo,
        portafolio: req.body.portafolio,
        tokenCliente: req.body.tokenCliente,
        tipoPerfil_idtipoPerfil: req.body.tipoPerfil_idtipoPerfil,
        users_documento: req.body.users_documento
    }
    perfil.getPerfil(userData, (error, data) => {
        if (error) {
            res.status(504).jsonp({
                "error": error
            })
        } else {
            res.status(200).jsonp(data)
        }
    })
})

router.post('/getdataoneperfil', jwt(secret), (req, res, next) => {
    var userData = {
        idperfil: req.body.idperfil,
        nombre: req.body.nombre,
        titulo: req.body.titulo,
        portafolio: req.body.portafolio,
        tokenCliente: req.body.tokenCliente,
        tipoPerfil_idtipoPerfil: req.body.tipoPerfil_idtipoPerfil,
        users_documento: req.body.users_documento
    }
    perfil.getOnePerfil(userData, (error, data) => {
        if (error) {
            res.status(501).jsonp({
                "error": error
            })
        } else {
            res.status(200).jsonp(data)
        }
    })
})

router.post('/createperfil', jwt(secret), (req, res, next) => {
    var userData = {
        idperfil: req.body.idperfil,
        nombre: req.body.nombre,
        titulo: req.body.titulo,
        portafolio: req.body.portafolio,
        tokenCliente: req.body.tokenCliente,
        tipoPerfil_idtipoPerfil: req.body.tipoPerfil_idtipoPerfil,
        users_documento: req.body.users_documento
    }
    perfil.createPerfil(userData, (error, data) => {
        if (error) {
            res.status(504).jsonp({
                "error": error
            })
        } else {
            res.status(200).jsonp(data)
        }
    })
})

router.post('/updateperfil', jwt(secret), (req, res, next) => {
    var userData = {
        idperfil: req.body.idperfil,
        nombre: req.body.nombre,
        titulo: req.body.titulo,
        portafolio: req.body.portafolio,
        tokenCliente: req.body.tokenCliente,
        tipoPerfil_idtipoPerfil: req.body.tipoPerfil_idtipoPerfil,
        users_documento: req.body.users_documento
    }
    perfil.updatePerfil(userData, (error, data) => {
        if (error) {
            res.status(504).jsonp({
                "error": error
            })
        } else {
            res.status(200).jsonp(data)
        }
    })
})

router.post('/deleteperfil', jwt(secret), (req, res, next) => {
    var userData = {
        idperfil: req.body.idperfil,
        nombre: req.body.nombre,
        titulo: req.body.titulo,
        portafolio: req.body.portafolio,
        tokenCliente: req.body.tokenCliente,
        tipoPerfil_idtipoPerfil: req.body.tipoPerfil_idtipoPerfil,
        users_documento: req.body.users_documento
    }
    perfil.deletePerfil(userData, (error, data) => {
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