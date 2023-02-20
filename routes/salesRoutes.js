const router = require('express').Router();
const controller = require('../controllers/salesController');
const methodNotAllowed = require('../errors/methodNotAllowed');

router
	.route('/')
	.get(controller.getAllSales)
	.post(controller.createNewSales)
	.all(methodNotAllowed);

router
	.route('/:id')
	.get(controller.getSalesByID)
	.patch(controller.patchSalesByID)
	.delete(controller.deleteSalesByID);

module.exports = router;
