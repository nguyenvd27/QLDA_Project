var express = require('express')
var morgan = require('morgan')
var passport = require('passport')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 5000

var Users = require('./routes/users')
var AssetType = require('./routes/assettype')
var Purpose = require('./routes/purposes')
var EmployeeRole = require('./routes/employeeroles')
var Department = require('./routes/departments')
var Employee = require('./routes/employees')
var Asset = require('./routes/assets')

var Authenticate = require('./routes/authenticate')

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use('/api/authenticate', Authenticate)


app.use('/users', Users)
app.use('/asset-type', passport.authenticate('jwt', {session: false}), AssetType)
app.use('/purposes', passport.authenticate('jwt', {session: false}), Purpose)
app.use('/employee-roles', passport.authenticate('jwt', {session: false}), EmployeeRole)
app.use('/departments', passport.authenticate('jwt', {session: false}), Department)
app.use('/employees', passport.authenticate('jwt', {session: false}), Employee)
app.use('/assets', passport.authenticate('jwt', {session: false}), Asset)

app.listen(port, () => {
  console.log('Server is running on port: ' + port)
})