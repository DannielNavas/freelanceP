var express = require('express');
var router = express.Router();


var contratos = require('../Modules/contratos')

router.post('/getdatacontratos', function (req, res, next) {
  var userData = {
    idcontratos: req.body.idcontratos,
    tokenCliente: req.body.tokenCliente,
    users_documento: req.body.users_documento
  }
  contratos.getContratos(userData, function (error, data) {
    if (error) {
      res.status(504).jsonp({
        "error": error
      })
    } else {
      res.status(200).jsonp(data)
    }
  })
})

router.post('/getdataonecontratos', function (req, res, next) {
  var userData = {
    idcontratos: req.body.idcontratos,
    tokenCliente: req.body.tokenCliente,
    users_documento: req.body.users_documento
  }
  contratos.getOneContratos(userData, function (error, data) {
    if (error) {
      res.status(501).jsonp({
        "error": error
      })
    } else {
      res.status(200).jsonp(data)
    }
  })
})

router.post('/createcontratos', function (req, res, next) {
  var userData = {
    idcontratos: req.body.idcontratos,
    tokenCliente: req.body.tokenCliente,
    users_documento: req.body.users_documento
  }
  contratos.createContratos(userData, function (error, data) {
    if (error) {
      res.status(504).jsonp({
        "error": error
      })
    } else {
      res.status(200).jsonp(data)
    }
  })
})

router.post('/updatecontratos', function (req, res, next) {
  var userData = {
    idcontratos: req.body.idcontratos,
    tokenCliente: req.body.tokenCliente,
    users_documento: req.body.users_documento
  }
  contratos.updateContratos(userData, function (error, data) {
    if (error) {
      res.status(504).jsonp({
        "error": error
      })
    } else {
      res.status(200).jsonp(data)
    }
  })
})

router.post('/deletecontratos', function (req, res, next) {
  var userData = {
    idcontratos: req.body.idcontratos,
    tokenCliente: req.body.tokenCliente,
    users_documento: req.body.users_documento
  }
  contratos.deleteContratos(userData, function (error, data) {
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

