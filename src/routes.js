const express = require('express');

const Web = require('./routes/web');

const routes = express.Router();

//Rotas Web
routes.use(Web);

module.exports = routes;