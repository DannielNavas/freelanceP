var express = require('express');
var router = express.Router();


var conocimientos = require('../Modules/conocimientos')

router.post('/getdatacontratos', function (req, res, next) {
  var userData = {
    idconocimientos: req.body.idconocimientos,
    conocimientos: req.body.conocimientos,
    valoracion: req.body.valoracion,
    users_documento: req.body.users_documento
  }
  conocimientos.getConocimientos(userData, function (error, data) {
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
    idconocimientos: req.body.idconocimientos,
    conocimientos: req.body.conocimientos,
    valoracion: req.body.valoracion,
    users_documento: req.body.users_documento
  }
  conocimientos.getOneConocimientos(userData, function (error, data) {
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
    idconocimientos: req.body.idconocimientos,
    conocimientos: req.body.conocimientos,
    valoracion: req.body.valoracion,
    users_documento: req.body.users_documento
  }
  conocimientos.createConocimientos(userData, function (error, data) {
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
    idconocimientos: req.body.idconocimientos,
    conocimientos: req.body.conocimientos,
    valoracion: req.body.valoracion,
    users_documento: req.body.users_documento
  }
  conocimientos.updateConocimientos(userData, function (error, data) {
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
    idconocimientos: req.body.idconocimientos,
    conocimientos: req.body.conocimientos,
    valoracion: req.body.valoracion,
    users_documento: req.body.users_documento
  }
  conocimientos.deleteConocimientos(userData, function (error, data) {
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

