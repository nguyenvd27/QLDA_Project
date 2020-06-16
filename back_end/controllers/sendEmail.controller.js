const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')
const jwtDecode = require('jwt-decode')

const Asset = require('../models/Asset')

process.env.SECRET_KEY = 'secret'
process.env.pass = 'v2Lbtnd3httnN27' // dien dung password o day


module.exports.sendEmail = (req, res) => {
  const fromMail = 'ducnguyen232323@gmail.com'
  const toMail = req.body.email
  const token = jwt.sign(req.body, process.env.SECRET_KEY, {
    expiresIn: '1h'
  })

  const http = 'http://localhost:5000/send-email/check-email/' + token

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ducnguyen232323@gmail.com',
      pass: process.env.pass // dien dung password cua mail
    }
  })

  var mailOptions = {
    from: fromMail,
    to: toMail,
    subject: 'Xác nhận bàn giao tài sản',
    html: '<p><b>Hi '+toMail+',</b></p><p>Bình luận: '+req.body.comment+'</p><p>Click vào link bên dưới để xác nhận đã nhận tài sản <b>'+req.body.asset.asset_code+'</b></p><a href="'+http+'">Xác nhận luôn</a>'
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if(error){
      console.log(error)
      res.jon({
        error: 'Error send mail ' + error
      })
    } else {
      console.log('Email sent: ' + info.response)
      res.json({
        info: info.response
      })

    }
  })
}

module.exports.checkEmail = (req, res) => {
  const token = req.params.token
  const decoded = jwtDecode(token)
  console.log(decoded)
  Asset.update({
    confirm: 1,
    manager: decoded.email
  },{
    where: {
      id: decoded.asset.id
    }
  })
  .then(data => {
    // res.send('Xác nhận bàn giao thành công, số lượng: '+data)
    res.sendFile(__dirname + '/confirm.html')
  })
  .catch(err => {
    res.send('Bàn giao thất bại, Lỗi: '+err)
  })
}