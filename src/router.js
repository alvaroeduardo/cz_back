const express = require('express');

const routes = express.Router();

const radioData = require('./Controller/radioData.controller');

routes.get('/', radioData.data);

module.exports = routes;