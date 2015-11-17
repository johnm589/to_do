var express = require('express')
  , logger = require('morgan')
  , bodyParser = require('body-parser')
  , mongoose = require('mongoose')
  , app = express()
  , ejs = require('ejs')

//Logger
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

mongoose.connect('mongodb://localhost/items')

//Set the view engine as ejs
app.set('view engine', 'ejs')

//Set the root path to display the index.ejs
app.get('/', function(req, res) {
  res.render('index', {title: 'HORAYY'})
})

var Item = require('./models/item.js')

var Milk = new Item({
  item_name: 'MILK'
})

Milk.save(function(err) {
  if (err) console.log(err)
  console.log('Milk created')
})


app.listen(3000, function(){
    console.log('Server running on port 3000')
})
