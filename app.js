const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

const corsOptions = {
	origin: 'https://localhost:8080',
};

app.use(cors(corsOptions));

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
	console.log('Hello from the middleware');
	next();
});

const salesRouter = require('./routes/salesRoutes');
const customersRouter = require('./routes/customers.router');

app.use('/api/v1/sales', salesRouter);
app.use('/api/v1/customers', customersRouter);

// Error Handling
const notFound = require('./errors/notFound');
const errorHandler = require('./errors/errorHandler');
app.use(notFound);
app.use(errorHandler);

module.exports = app;
