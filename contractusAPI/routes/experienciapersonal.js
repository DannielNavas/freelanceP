var express = require('express');
var router = express.Router();


var experienciaPersonal = require('../Modules/experienciaPersonal')

router.post('/getdataexperienciapersonal', function (req, res, next) {
  var userData = {
    idexperienciaPersonal: req.body.idexperienciaPersonal,
    fechaInicio: req.body.fechaInicio,
    fechaFinal: req.body.fechaFinal,
    lugarExperiencia: req.body.lugarExperiencia,
    funciones: req.body.funciones,
    users_documento: req.body.users_documento,
  }
  experienciaPersonal.getExperienciaPersonal(userData, function (error, data) {
    if (error) {
      res.status(504).jsonp({
        "error": error
      })
    } else {
      res.status(200).jsonp(data)
    }
  })
})

router.post('/getdataoneexperienciapersonal', function (req, res, next) {
  var userData = {
    idexperienciaPersonal: req.body.idexperienciaPersonal,
    fechaInicio: req.body.fechaInicio,
    fechaFinal: req.body.fechaFinal,
    lugarExperiencia: req.body.lugarExperiencia,
    funciones: req.body.funciones,
    users_documento: req.body.users_documento,
  }
  experienciaPersonal.getOneExperienciaPersonal(userData, function (error, data) {
    if (error) {
      res.status(501).jsonp({
        "error": error
      })
    } else {
      res.status(200).jsonp(data)
    }
  })
})

router.post('/createexperienciapersonal', function (req, res, next) {
  var userData = {
    idexperienciaPersonal: req.body.idexperienciaPersonal,
    fechaInicio: req.body.fechaInicio,
    fechaFinal: req.body.fechaFinal,
    lugarExperiencia: req.body.lugarExperiencia,
    funciones: req.body.funciones,
    users_documento: req.body.users_documento,
  }
  experienciaPersonal.createExperienciaPersonal(userData, function (error, data) {
    if (error) {
      res.status(504).jsonp({
        "error": error
      })
    } else {
      res.status(200).jsonp(data)
    }
  })
})

router.post('/updateexperienciapersonal', function (req, res, next) {
  var userData = {
    idexperienciaPersonal: req.body.idexperienciaPersonal,
    fechaInicio: req.body.fechaInicio,
    fechaFinal: req.body.fechaFinal,
    lugarExperiencia: req.body.lugarExperiencia,
    funciones: req.body.funciones,
    users_documento: req.body.users_documento,
  }
  experienciaPersonal.updateExperienciaPersonal(userData, function (error, data) {
    if (error) {
      res.status(504).jsonp({
        "error": error
      })
    } else {
      res.status(200).jsonp(data)
    }
  })
})

router.post('/deleteexperienciapersonal', function (req, res, next) {
  var userData = {
    idexperienciaPersonal: req.body.idexperienciaPersonal,
    fechaInicio: req.body.fechaInicio,
    fechaFinal: req.body.fechaFinal,
    lugarExperiencia: req.body.lugarExperiencia,
    funciones: req.body.funciones,
    users_documento: req.body.users_documento,
  }
  experienciaPersonal.deleteExperienciaPersonal(userData, function (error, data) {
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

