var express = require('express')
  , logger = require('morgan')
  , bodyParser = require('body-parser')
  , mongoose = require('mongoose')
  , app = express()
  , ejs = require('ejs')

//Set the view engine as ejs
app.set('view engine', 'ejs')

//Set the root path to display the index.ejs
app.get('/', function(req, res) {
  res.render('index', {title: 'HORAYY'})
})


app.listen(3000, function(){
    console.log('Server running on port 3000')
})
