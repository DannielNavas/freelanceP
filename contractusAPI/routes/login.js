var express = require('express');
const jwt = require('express-jwt')
const env = require('dotenv')
env.config();
var router = express.Router();

const secret = { secret: process.env.PASS_SECURITY_API }

var login = require('../Modules/login')


router.post('/login', jwt(secret), (req, res, next) => {
    var userData = {
        email: req.body.email,
        pass: req.body.password
    }
    login.getUserLogin(userData, (error, data) => {
        if (error) {
            res.status(501).jsonp({
                "error": error
            })
        } else {
            res.status(200).jsonp(data)
        }
    })
})

router.post('/createuser', jwt(secret), (req, res, next) => {
    var userData = {
        email: req.body.email,
        user: req.body.user,
        password: req.body.password
    }
    login.createUser(userData, (error, data) => {
        if (error) {
            res.status(504).jsonp({
                "error": error
            })
        } else {
            res.status(200).jsonp(data)
        }
    })
})

router.post('/getDataUser', jwt(secret), (req, res, next) => {
    var userData = {
        id: req.body.id
    }
    login.dataUser(userData, (error, data) => {
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