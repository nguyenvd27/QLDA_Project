const User = require('../models/User')
const Session = require('../models/Session')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

process.env.SECRET_KEY = 'secret'

module.exports.register = (req, res) => {
  const today = new Date()
  const userData = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    created: today
  }
  
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          User.create(userData)
            .then(user => {
              res.json({ status: user.email + ' Registered!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        })
      } else {
        res.json({ error: 'User already exists' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
}

module.exports.login = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(data => {
      if (data) {
        const user = data.dataValues
        if (bcrypt.compareSync(req.body.password, user.password)) {
          let token = jwt.sign(user, process.env.SECRET_KEY, {
            expiresIn: '1h'
          })

          Session.findAll()
          .then(sessions => {
            let checkExist = 0;
            // console.log(sessions)
            // console.log(data.length)
            // save in sessions table
            sessions.forEach( session => {
              if(session.email == req.body.email){
                checkExist = 1;
              }
            })
            if(checkExist == 0){
              Session.create({
                id_user: user.id,
                email: user.email,
                token: token
              })
            }else{
              Session.update({
                token: token
              }, {
                where: {email: req.body.email}
              })
            }

            res.json({token: token})
          })
          .catch(err => {
            console.log('false ')
            res.json({ error: err })
          })
        } else {
          console.log('login false password')
          res.json({ error: 'login false password!!!' })
        }
      } else {
        console.log('login false')
        res.json({ error: 'User does not exist' })
      }
    })
    .catch(err => {
      console.log('false ')
      res.status(400).json({ error: err })
    })
}

module.exports.facebookOAuth = (req, res) => {
  console.log('Got here')
  const user = {
    id: req.body.id,
    name: req.body.name,
    email: req.body.email,
    picture: req.body.picture
  }
  
  console.log('user '+user)
  let token = jwt.sign(user, process.env.SECRET_KEY, {
    expiresIn: '1h'
  })

  Session.findAll()
  .then(sessions => {
    let checkExist = 0;
    console.log('Ssession' +sessions)
    // save in sessions table
    sessions.forEach( session => {
      if(session.email == req.body.email){
        checkExist = 1;
      }
    })

    console.log('checkExist '+checkExist)
    if(checkExist == 0){
      Session.create({
        id_user: req.body.id,
        email: req.body.email,
        token: token
      })
    }else{
      Session.update({
        token: token
      }, {
        where: {email: req.body.email}
      })
    }
  })

  res.json({
    message: 'is_loggedin_Facebook',
    token: token
  })
}

module.exports.secret = (req, res) => {
  res.json({
    message: 'xin chao tat ca moi nguoi'
  })
}