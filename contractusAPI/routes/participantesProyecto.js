var express = require('express');
const jwt = require('express-jwt')
const env = require('dotenv')
env.config();
var router = express.Router();

const secret = { secret: process.env.PASS_SECURITY_API }

var participantesProyecto = require('../Modules/participantesProyecto')

router.post('/getdataparticipantesproyecto', jwt(secret), (req, res, next) => {
    var userData = {
        idparticipantesProyecto: req.body.idparticipantesProyecto,
        proyecto_idproyecto: req.body.proyecto_idproyecto,
        users_documento: req.body.users_documento
    }
    participantesProyecto.getParticipantesProyecto(userData, (error, data) => {
        if (error) {
            res.status(504).jsonp({
                "error": error
            })
        } else {
            res.status(200).jsonp(data)
        }
    })
})

router.post('/getdataoneparticipantesproyecto', jwt(secret), (req, res, next) => {
    var userData = {
        idparticipantesProyecto: req.body.idparticipantesProyecto,
        proyecto_idproyecto: req.body.proyecto_idproyecto,
        users_documento: req.body.users_documento
    }
    participantesProyecto.getOneParticipantesProyecto(userData, (error, data) => {
        if (error) {
            res.status(501).jsonp({
                "error": error
            })
        } else {
            res.status(200).jsonp(data)
        }
    })
})

router.post('/createparticipantesproyecto', jwt(secret), (req, res, next) => {
    var userData = {
        idparticipantesProyecto: req.body.idparticipantesProyecto,
        proyecto_idproyecto: req.body.proyecto_idproyecto,
        users_documento: req.body.users_documento
    }
    participantesProyecto.createParticipantesProyecto(userData, (error, data) => {
        if (error) {
            res.status(504).jsonp({
                "error": error
            })
        } else {
            res.status(200).jsonp(data)
        }
    })
})

router.post('/updateparticipantesproyecto', jwt(secret), (req, res, next) => {
    var userData = {
        idparticipantesProyecto: req.body.idparticipantesProyecto,
        proyecto_idproyecto: req.body.proyecto_idproyecto,
        users_documento: req.body.users_documento
    }
    participantesProyecto.updateParticipantesProyecto(userData, (error, data) => {
        if (error) {
            res.status(504).jsonp({
                "error": error
            })
        } else {
            res.status(200).jsonp(data)
        }
    })
})

router.post('/deleteparticipantesproyecto', jwt(secret), (req, res, next) => {
    var userData = {
        idparticipantesProyecto: req.body.idparticipantesProyecto,
        proyecto_idproyecto: req.body.proyecto_idproyecto,
        users_documento: req.body.users_documento
    }
    participantesProyecto.deleteParticipantesProyecto(userData, (error, data) => {
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