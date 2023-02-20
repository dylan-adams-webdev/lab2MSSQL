const notFound = (req, res, next) => {
	next({ status: 404, message: `${req.originalUrl} does not exist` });
};

module.exports = notFound;
