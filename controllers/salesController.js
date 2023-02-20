const db = require('../config/db.manager');

const getAllSales = (req, res) => {
	const salesProduct = db.getSalesProducts().then((results) => {
		console.log(results);
		// Express will send 200 status automatically
		res.json({
			status: 'successful',
			data: results.recordsets[0],
		});
	});
};

const getSalesByID = (req, res, next) => {
	const { id } = req.params;
	// I made an error handler for this
	// 501 = not impimented
	next({ status: 501, message: 'This functionality is not implemented yet' });
};

const createNewSales = (req, res, next) => {
	const { body } = req;
	const { id } = req.params;
	next({ status: 501, message: 'This functionality is not implemented yet' });
};

const patchSalesByID = (req, res, next) => {
	next({
		status: 501,
		message: 'This functionality is not implemented yet',
	});
};

const deleteSalesByID = (req, res, next) => {
	const { body } = req;
	const { id } = req.params;
	next({ status: 501, message: 'This functionality is not implemented yet' });
};

// export all controller functions as an object for middleware arrays
// ex. createNewSales: [
//          idDoesNotExist,
//          bodyContainsParam('name'),
//          ... ,
//          createNewSales
//     ]
// This is different than instructions
module.exports = {
	getAllSales,
	getSalesByID,
	createNewSales,
	patchSalesByID,
	deleteSalesByID,
};
