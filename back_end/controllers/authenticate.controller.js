const User = require('../models/User')
const Session = require('../models/Session')

// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt')
const jwtDecode = require('jwt-decode')

process.env.SECRET_KEY = 'secret'

module.exports.authenticate = (req, res) => {
  const token = req.body.token
  const session = Session.findOne({
    where: {token: token}
  }).then(session => {
    // console.log('aaaaaaaaaaaaaa'+session)
    if(!session){
      res.json({
        message: 'false'
      })
    }
    else{
      // console.log(token)
      const decoded = jwtDecode(token)
      // console.log(decoded)
      res.json({
        message: 'true'
      })
    }
  })
  // console.log('aaaaaaaaaaaaaa'+session)
  // if(!session){
  //   res.json({
  //     message: 'false'
  //   })
  // }
  // else{
  //   console.log(token)
  //   const decoded = jwtDecode(token)
  //   console.log(decoded)
  //   res.json({
  //     message: 'ok'
  //   })
  // }
}