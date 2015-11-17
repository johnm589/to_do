var itemsController = require('../controllers/item_controller.js'),
            express = require('express'),
         itemRoutes = express.Router()

itemRoutes.route('/')
  .get(itemsController.getAllItems)


itemRoutes.route('/:item_name')
  .post(itemsController.createItem)
  .get(itemsController.showItem)
  .delete(itemsController.deleteItem)

  module.exports = itemRoutes
