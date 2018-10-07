var express = require('express');
var router = express.Router();


var perfil = require('../Modules/perfil')

router.post('/getdataperfil', function (req, res, next) {
  var userData = {
    idperfil: req.body.idperfil,
    nombre: req.body.nombre,
    titulo: req.body.titulo,
    portafolio: req.body.portafolio,
    tokenCliente: req.body.tokenCliente,
    tipoPerfil_idtipoPerfil: req.body.tipoPerfil_idtipoPerfil,
    users_documento: req.body.users_documento
  }
  perfil.getPerfil(userData, function (error, data) {
    if (error) {
      res.status(504).jsonp({
        "error": error
      })
    } else {
      res.status(200).jsonp(data)
    }
  })
})

router.post('/getdataoneperfil', function (req, res, next) {
  var userData = {
    idperfil: req.body.idperfil,
    nombre: req.body.nombre,
    titulo: req.body.titulo,
    portafolio: req.body.portafolio,
    tokenCliente: req.body.tokenCliente,
    tipoPerfil_idtipoPerfil: req.body.tipoPerfil_idtipoPerfil,
    users_documento: req.body.users_documento
  }
  perfil.getOnePerfil(userData, function (error, data) {
    if (error) {
      res.status(501).jsonp({
        "error": error
      })
    } else {
      res.status(200).jsonp(data)
    }
  })
})

router.post('/createperfil', function (req, res, next) {
  var userData = {
    idperfil: req.body.idperfil,
    nombre: req.body.nombre,
    titulo: req.body.titulo,
    portafolio: req.body.portafolio,
    tokenCliente: req.body.tokenCliente,
    tipoPerfil_idtipoPerfil: req.body.tipoPerfil_idtipoPerfil,
    users_documento: req.body.users_documento
  }
  perfil.createPerfil(userData, function (error, data) {
    if (error) {
      res.status(504).jsonp({
        "error": error
      })
    } else {
      res.status(200).jsonp(data)
    }
  })
})

router.post('/updateperfil', function (req, res, next) {
  var userData = {
    idperfil: req.body.idperfil,
    nombre: req.body.nombre,
    titulo: req.body.titulo,
    portafolio: req.body.portafolio,
    tokenCliente: req.body.tokenCliente,
    tipoPerfil_idtipoPerfil: req.body.tipoPerfil_idtipoPerfil,
    users_documento: req.body.users_documento
  }
  perfil.updatePerfil(userData, function (error, data) {
    if (error) {
      res.status(504).jsonp({
        "error": error
      })
    } else {
      res.status(200).jsonp(data)
    }
  })
})

router.post('/deleteperfil', function (req, res, next) {
  var userData = {
    idperfil: req.body.idperfil,
    nombre: req.body.nombre,
    titulo: req.body.titulo,
    portafolio: req.body.portafolio,
    tokenCliente: req.body.tokenCliente,
    tipoPerfil_idtipoPerfil: req.body.tipoPerfil_idtipoPerfil,
    users_documento: req.body.users_documento
  }
  perfil.deletePerfil(userData, function (error, data) {
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

