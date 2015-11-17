var express = require('express')
  , logger = require('morgan')
  , bodyParser = require('body-parser')
  , mongoose = require('mongoose')
  , app = express()
  , ejs = require('ejs')

app.get('/', function(req, res) {
  res.send('WORKED!')
})


app.listen(3000, function(){
    console.log('Server running on port 3000')
})
