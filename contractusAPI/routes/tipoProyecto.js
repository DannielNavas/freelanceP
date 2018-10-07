var express = require('express');
var router = express.Router();


var tipoProyecto = require('../Modules/tipoProyecto')

router.post('/getdatatipoproyecto', function (req, res, next) {
  var userData = {
    id: req.body.id
  }
  tipoProyecto.getTipoProyecto(userData, function (error, data) {
    if (error) {
      res.status(504).jsonp({
        "error": error
      })
    } else {
      res.status(200).jsonp(data)
    }
  })
})

router.post('/getdataonetipoproyecto', function (req, res, next) {
  var userData = {
    idtipoProyecto: req.body.idtipoProyecto,
    tipoProyecto: req.body.tipoProyecto
  }
  tipoProyecto.getOneTipoProyecto(userData, function (error, data) {
    if (error) {
      res.status(501).jsonp({
        "error": error
      })
    } else {
      res.status(200).jsonp(data)
    }
  })
})

router.post('/createtipoproyecto', function (req, res, next) {
  var userData = {
    idtipoProyecto: req.body.idtipoProyecto,
    tipoProyecto: req.body.tipoProyecto
  }
  tipoProyecto.createTipoProyecto(userData, function (error, data) {
    if (error) {
      res.status(504).jsonp({
        "error": error
      })
    } else {
      res.status(200).jsonp(data)
    }
  })
})

router.post('/updatetipoproyecto', function (req, res, next) {
  var userData = {
    idtipoProyecto: req.body.idtipoProyecto,
    tipoProyecto: req.body.tipoProyecto
  }
  tipoProyecto.updateTipoProyecto(userData, function (error, data) {
    if (error) {
      res.status(504).jsonp({
        "error": error
      })
    } else {
      res.status(200).jsonp(data)
    }
  })
})

router.post('/deletetipoproyecto', function (req, res, next) {
  var userData = {
    idtipoProyecto: req.body.idtipoProyecto,
    tipoProyecto: req.body.tipoProyecto
  }
  tipoProyecto.deleteTipoProyecto(userData, function (error, data) {
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

