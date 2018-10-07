var express = require('express');
var router = express.Router();


var participantesProyecto = require('../Modules/participantesProyecto')

router.post('/getdataparticipantesproyecto', function (req, res, next) {
  var userData = {
    idparticipantesProyecto: req.body.idparticipantesProyecto,
    proyecto_idproyecto: req.body.proyecto_idproyecto,
    users_documento: req.body.users_documento
  }
  participantesProyecto.getParticipantesProyecto(userData, function (error, data) {
    if (error) {
      res.status(504).jsonp({
        "error": error
      })
    } else {
      res.status(200).jsonp(data)
    }
  })
})

router.post('/getdataoneparticipantesproyecto', function (req, res, next) {
  var userData = {
    idparticipantesProyecto: req.body.idparticipantesProyecto,
    proyecto_idproyecto: req.body.proyecto_idproyecto,
    users_documento: req.body.users_documento
  }
  participantesProyecto.getOneParticipantesProyecto(userData, function (error, data) {
    if (error) {
      res.status(501).jsonp({
        "error": error
      })
    } else {
      res.status(200).jsonp(data)
    }
  })
})

router.post('/createparticipantesproyecto', function (req, res, next) {
  var userData = {
    idparticipantesProyecto: req.body.idparticipantesProyecto,
    proyecto_idproyecto: req.body.proyecto_idproyecto,
    users_documento: req.body.users_documento
  }
  participantesProyecto.createParticipantesProyecto(userData, function (error, data) {
    if (error) {
      res.status(504).jsonp({
        "error": error
      })
    } else {
      res.status(200).jsonp(data)
    }
  })
})

router.post('/updateparticipantesproyecto', function (req, res, next) {
  var userData = {
    idparticipantesProyecto: req.body.idparticipantesProyecto,
    proyecto_idproyecto: req.body.proyecto_idproyecto,
    users_documento: req.body.users_documento
  }
  participantesProyecto.updateParticipantesProyecto(userData, function (error, data) {
    if (error) {
      res.status(504).jsonp({
        "error": error
      })
    } else {
      res.status(200).jsonp(data)
    }
  })
})

router.post('/deleteparticipantesproyecto', function (req, res, next) {
  var userData = {
    idparticipantesProyecto: req.body.idparticipantesProyecto,
    proyecto_idproyecto: req.body.proyecto_idproyecto,
    users_documento: req.body.users_documento
  }
  participantesProyecto.deleteParticipantesProyecto(userData, function (error, data) {
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

