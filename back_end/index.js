const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/test', function (req, res) {
  res.send('Hello World! This is route test')
})
 
app.listen(3000)