var express = require('express');
var router = express.Router();


var experienciaContractus = require('../Modules/experienciaContractus')

router.post('/getdataexperienciacontractus', function (req, res, next) {
  var userData = {
    idexperienciaContractus: req.body.idexperienciaContractus,
    fechaInicio: req.body.fechaInicio,
    fechaFinal: req.body.fechaFinal,
    cliente: req.body.cliente,
    tipoProyecto_idtipoProyecto: req.body.tipoProyecto_idtipoProyecto
  }
  experienciaContractus.getExperienciaContractus(userData, function (error, data) {
    if (error) {
      res.status(504).jsonp({
        "error": error
      })
    } else {
      res.status(200).jsonp(data)
    }
  })
})

router.post('/getdataoneexperienciacontractus', function (req, res, next) {
  var userData = {
    idexperienciaContractus: req.body.idexperienciaContractus,
    fechaInicio: req.body.fechaInicio,
    fechaFinal: req.body.fechaFinal,
    cliente: req.body.cliente,
    tipoProyecto_idtipoProyecto: req.body.tipoProyecto_idtipoProyecto
  }
  experienciaContractus.getOneExperienciaContractus(userData, function (error, data) {
    if (error) {
      res.status(501).jsonp({
        "error": error
      })
    } else {
      res.status(200).jsonp(data)
    }
  })
})

router.post('/createexperienciacontractus', function (req, res, next) {
  var userData = {
    idexperienciaContractus: req.body.idexperienciaContractus,
    fechaInicio: req.body.fechaInicio,
    fechaFinal: req.body.fechaFinal,
    cliente: req.body.cliente,
    tipoProyecto_idtipoProyecto: req.body.tipoProyecto_idtipoProyecto
  }
  experienciaContractus.createExperienciaContractus(userData, function (error, data) {
    if (error) {
      res.status(504).jsonp({
        "error": error
      })
    } else {
      res.status(200).jsonp(data)
    }
  })
})

router.post('/updateexperienciacontractus', function (req, res, next) {
  var userData = {
    idexperienciaContractus: req.body.idexperienciaContractus,
    fechaInicio: req.body.fechaInicio,
    fechaFinal: req.body.fechaFinal,
    cliente: req.body.cliente,
    tipoProyecto_idtipoProyecto: req.body.tipoProyecto_idtipoProyecto
  }
  experienciaContractus.updateExperienciaContractus(userData, function (error, data) {
    if (error) {
      res.status(504).jsonp({
        "error": error
      })
    } else {
      res.status(200).jsonp(data)
    }
  })
})

router.post('/deleteexperienciacontractus', function (req, res, next) {
  var userData = {
    idexperienciaContractus: req.body.idexperienciaContractus,
    fechaInicio: req.body.fechaInicio,
    fechaFinal: req.body.fechaFinal,
    cliente: req.body.cliente,
    tipoProyecto_idtipoProyecto: req.body.tipoProyecto_idtipoProyecto
  }
  experienciaContractus.deleteExperienciaContractus(userData, function (error, data) {
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

