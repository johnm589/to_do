var express = require('express')
  , logger = require('morgan')
  , bodyParser = require('body-parser')
  , mongoose = require('mongoose')
  , app = express()
  , ejs = require('ejs')
  , Item = require('./models/item.js')


mongoose.connect('mongodb://localhost/item')

//Logger
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


//Set the view engine as ejs
app.set('view engine', 'ejs')

//Set the root path to display the index.ejs
app.get('/', function(req, res) {
  res.render('index', {title: 'HORAYY'})
})

app.get('/:item_name', function(req, res) {
  Item.find({item_name: req.params.item_name}, function(err, item) {
    if (err) console.log(err);
    res.json(item)
  })
})

var Milk = new Item({
  item_name: 'milk'
})

Milk.save(function(err) {
  if (err) console.log(err);
  console.log('Milk created')
})


app.listen(3000, function(){
    console.log('Server running on port 3000')
})
