const service = require('../services/customers.service');

const list = async (req, res) => {
	const data = await service.listCustomers().then((res) => res.recordsets[0]);
	res.json({ status: 'successful', data });
};

module.exports = { list };
