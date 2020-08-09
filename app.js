require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const logger = require('morgan'); 
const helpers = require('./app/Helpers/helpers');
const routes = require('./routes/index');

// view engine setup
routes.set('views', path.join(__dirname, 'resources', 'views'));
routes.set('view engine', 'ejs');

// Registering all helper functions for template engine
// will be accessible in views via helpers.functionName()
routes.locals.helpers = helpers;

// Don't need body-parser package for express apps 4.16+
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));

// Static file serving
app.use(express.static(path.join(__dirname, 'public')));

// Registering all routes
app.use(routes);

app.listen(process.env.APP_PORT, () => console.log(`App running on ${process.env.APP_URL}:${process.env.APP_PORT}/`));