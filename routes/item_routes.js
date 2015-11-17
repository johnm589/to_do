var itemsController = require('../controllers/item_controller.js'),
            express = require('express'),
         itemRoutes = express.Router()

itemRoutes.route('/')
  .get(itemsController.getAllItems)
  .post(itemsController.createItem)

itemRoutes.route('/:item_name')
  .get(itemsController.showItem)
  .put(itemsController.updateItem)
  .delete(itemsController.deleteItem)

  module.exports = itemRoutes
