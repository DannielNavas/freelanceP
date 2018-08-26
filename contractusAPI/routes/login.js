var express = require('express');
var router = express.Router();


var login = require('../Modules/login')


router.post('/login', function (req, res, next) {
  var userData = {
    email: req.body.email,
    pass: req.body.password
  }
  login.getUserLogin(userData, function (error, data) {
    if (error) {
      res.status(501).jsonp({
        "error": error
      })
    } else {
      res.status(200).jsonp(data)
    }
  })
})

router.post('/createuser', function (req, res, next) {
  var userData = {
    email: req.body.email,
    user: req.body.user,
    password: req.body.password
  }
  login.createUser(userData, function (error, data) {
    if (error) {
      res.status(504).jsonp({
        "error": error
      })
    } else {
      res.status(200).jsonp(data)
    }
  })
})

router.post('/getDataUser', function (req, res, next) {
  var userData = {
    id: req.body.id
  }
  login.dataUser(userData, function (error, data) {
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