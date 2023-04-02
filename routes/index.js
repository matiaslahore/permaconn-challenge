const express = require('express');
const productRouter = require('./product');
const app = express();

app.use('/products', productRouter);

module.exports = app;
