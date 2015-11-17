var Item = require('../models/item.js')

function index(req, res) {
  Item.find({}, function(err, items) {
    if (err) console.log(err)
    res.jsons(items)
  })
}

function show(req, res) {
  Item.find({} req.params.)
}
