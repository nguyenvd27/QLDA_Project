const express = require('express')
const passport = require('passport')
const authenticate = express.Router()

const controller = require('../controllers/authenticate.controller')
const passportConf = require('../passport')

process.env.SECRET_KEY = 'secret'

authenticate.post('/', controller.authenticate)

// users.get('/secret', passport.authenticate('jwt', {session: false}), controller.secret)

module.exports = authenticate