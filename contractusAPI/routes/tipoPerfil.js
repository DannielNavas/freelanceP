var express = require('express');
var router = express.Router();


var tipoPerfil = require('../Modules/tipoPerfil')

router.post('/getdatatipoperfil', function (req, res, next) {
  var userData = {
    idtipoPerfil: req.body.idtipoPerfil
  }
  tipoPerfil.getTipoPerfil(userData, function (error, data) {
    if (error) {
      res.status(504).jsonp({
        "error": error
      })
    } else {
      res.status(200).jsonp(data)
    }
  })
})

router.post('/getdataonetipoperfil', function (req, res, next) {
  var userData = {
    idtipoPerfil: req.body.idtipoPerfil,
    tipoPerfil: req.body.tipoPerfil
  }
  tipoPerfil.getOneTipoPerfil(userData, function (error, data) {
    if (error) {
      res.status(501).jsonp({
        "error": error
      })
    } else {
      res.status(200).jsonp(data)
    }
  })
})

router.post('/createtipoperfil', function (req, res, next) {
  var userData = {
    idtipoPerfil: req.body.idtipoPerfil,
    tipoPerfil: req.body.tipoPerfil
  }
  tipoPerfil.createTipoPerfil(userData, function (error, data) {
    if (error) {
      res.status(504).jsonp({
        "error": error
      })
    } else {
      res.status(200).jsonp(data)
    }
  })
})

router.post('/updatetipoperfil', function (req, res, next) {
  var userData = {
    idtipoPerfil: req.body.idtipoPerfil,
    tipoPerfil: req.body.tipoPerfil
  }
  tipoPerfil.updateTipoPerfil(userData, function (error, data) {
    if (error) {
      res.status(504).jsonp({
        "error": error
      })
    } else {
      res.status(200).jsonp(data)
    }
  })
})

router.post('/deletetipoperfil', function (req, res, next) {
  var userData = {
    idtipoPerfil: req.body.idtipoPerfil,
    tipoPerfil: req.body.tipoPerfil
  }
  tipoPerfil.deleteTipoPerfil(userData, function (error, data) {
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

