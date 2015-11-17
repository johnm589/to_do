var express = require('express')
  , logger = require('morgan')
  , bodyParser = require('body-parser')
  , mongoose = require('mongoose')
  , app = express()
  , ejs = require('ejs')
  , Item = require('./models/item.js')
  , itemRoutes = require('./routes/item_routes.js')


mongoose.connect('mongodb://localhost/item')

//Logger
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


//Set the view engine as ejs
app.set('view engine', 'ejs')

//Set the root path to display the index.ejs
app.get('/', function(req, res) {
  res.send('homepage')
})


app.use('/items', itemRoutes)


app.listen(3000, function(){
    console.log('Server running on port 3000')
})
