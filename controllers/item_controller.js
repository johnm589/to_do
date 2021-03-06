var Item = require('../models/item.js')

function index(req, res) {
  Item.find({}, function(err, items) {
    if (err) console.log(err)
    res.json(items)
  })
}

// function create(req, res){
//   console.log('Create item')
// //form field
//   var item = new Item()
//
//   item.item_name = req.body.item_name
//
//   item.save(function(err){
//     if (err){
//       res.send(err)
//     }
//     res.json({success: true, message: 'item created!'})
//   })
// }


function create(req, res){
  console.log('Create item')
//form field
  var item = new Item()

  item.item_name = req.params.item_name

  item.save(function(err){
    if (err){
      res.send(err)
    }
    res.json({success: true, message: 'item created!'})
  })
}

function show(req, res) {
  Item.find({item_name: req.params.item_name}, function(err, item){
    if (err) res.send(err)
    res.json(item)
  })
}

function destroy(req, res){
  Item.findOneAndRemove(req.params.item_name, function(err, item){
    if (err) res.send(err)
    res.json({success: true, message: 'item deleted'})
  })
}

function create(req, res) {
  console.log('Created item')

  var item = new Item()

  item.item_name = req.params.item_name

  item.save(function(err) {
    if (err) {
      res.send(err)
    }
    res.json({success: true, message: 'Item created!'})
  })
}


module.exports = {
  getAllItems: index,
  createItem: create,
  showItem: show,
  deleteItem: destroy,

}
