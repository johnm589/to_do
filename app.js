var express = require('express')
  , logger = require('morgan')
  , bodyParser = require('body-parser')
  , mongoose = require('mongoose')
  , app = express()
  , ejs = require('ejs')


app.set('view engine', 'ejs')

app.get('/', function(req, res) {
  res.render('index', {title: 'To-Do-list'})
})


app.listen(3000, function(){
    console.log('Server running on port 3000')
})
