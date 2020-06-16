const express = require('express')
const passport = require('passport')
const users = express.Router()

const controller = require('../controllers/user.controller')
const passportConf = require('../passport')

process.env.SECRET_KEY = 'secret'

users.post('/register', controller.register)

users.post('/login', controller.login)

users.post('/oauth/facebook', controller.facebookOAuth)

users.get('/secret', passport.authenticate('jwt', {session: false}), controller.secret)

module.exports = users