var express = require('express');
var router = express.Router();


var login = require('../Modules/login')


router.post('/login', function (req, res, next) {
  console.log(req.body.email)
  console.log(req.body.password)
  var userData = {
    email: req.body.email,
    pass: req.body.password
  }
  login.getUserLogin(userData, function (error, data) {
    res.status(200).jsonp(data)
  })
})

module.exports = router;