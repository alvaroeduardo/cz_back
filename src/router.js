const express = require('express');

const routes = express.Router();

const radioData = require('./Controller/radioData.controller')

routes.get('/home', radioData.data)

module.exports = routes;