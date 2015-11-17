var mongoose = require('mongoose')

var itemSchema = new mongoose.Schema({
  item_name: String
})

var Item = mongoose.model('Item', itemSchema)

module.exports = Item;
