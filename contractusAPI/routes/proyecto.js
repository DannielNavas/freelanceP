var express = require('express');
var router = express.Router();


var proyecto = require('../Modules/proyecto')

router.post('/getdataproyecto', function (req, res, next) {
  var userData = {
    idproyecto: req.body.idproyecto,
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    presupuesto: req.body.presupuesto,
    tipoProyecto_idtipoProyecto: req.body.tipoProyecto_idtipoProyecto
  }
  proyecto.getProyecto(userData, function (error, data) {
    if (error) {
      res.status(504).jsonp({
        "error": error
      })
    } else {
      res.status(200).jsonp(data)
    }
  })
})

router.post('/getdataoneproyecto', function (req, res, next) {
  var userData = {
    idproyecto: req.body.idproyecto,
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    presupuesto: req.body.presupuesto,
    tipoProyecto_idtipoProyecto: req.body.tipoProyecto_idtipoProyecto
  }
  proyecto.getOneProyecto(userData, function (error, data) {
    if (error) {
      res.status(501).jsonp({
        "error": error
      })
    } else {
      res.status(200).jsonp(data)
    }
  })
})

router.post('/createproyecto', function (req, res, next) {
  var userData = {
    idproyecto: req.body.idproyecto,
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    presupuesto: req.body.presupuesto,
    tipoProyecto_idtipoProyecto: req.body.tipoProyecto_idtipoProyecto
  }
  proyecto.createProyecto(userData, function (error, data) {
    if (error) {
      res.status(504).jsonp({
        "error": error
      })
    } else {
      res.status(200).jsonp(data)
    }
  })
})

router.post('/updateproyecto', function (req, res, next) {
  var userData = {
    idproyecto: req.body.idproyecto,
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    presupuesto: req.body.presupuesto,
    tipoProyecto_idtipoProyecto: req.body.tipoProyecto_idtipoProyecto
  }
  proyecto.updateProyecto(userData, function (error, data) {
    if (error) {
      res.status(504).jsonp({
        "error": error
      })
    } else {
      res.status(200).jsonp(data)
    }
  })
})

router.post('/deleteproyecto', function (req, res, next) {
  var userData = {
    idproyecto: req.body.idproyecto,
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    presupuesto: req.body.presupuesto,
    tipoProyecto_idtipoProyecto: req.body.tipoProyecto_idtipoProyecto
  }
  proyecto.deleteProyecto(userData, function (error, data) {
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

