require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan'); 
const routes = require('./routes/index');

// Don't need body-parser package for express apps 4.16+
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));

// Static file serving
app.use(express.static(path.join(__dirname, 'public')));

// Registering all routes
app.use(routes);

// Registering all helper functions for template engine
app.locals.helpers = helpers;

app.listen(process.env.APP_PORT, () => console.log(`App running on ${process.env.APP_URL}:${process.env.APP_PORT}/`));