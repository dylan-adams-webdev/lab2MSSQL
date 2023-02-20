const errorHandler = (err, req, res, next) => {
    const { status = 500, message = 'An unknown server error occurred' } = err;
    res.status(status).json({ error: message });
};

module.exports = errorHandler;