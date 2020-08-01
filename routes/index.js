const express = require('express');
const app = express();
const mainRoutes = require('./main');
const usersRoutes = require('./users');

app.use('/', mainRoutes);
app.use('/users', usersRoutes);

module.exports = app;