const express = require('express');
const EnderecoController = require('../controllers/EnderecoController');
const UsuarioController = require('../controllers/UsuarioController');
const EventoController = require('../controllers/EventoController');
const routes = express.Router();
//criar um novo endereco
routes.post('/endereco',EnderecoController.create);
//listar um novo endereco 
routes.get('/endereco',EnderecoController.index);
//criar um novo endereco
routes.post('/usuario',UsuarioController.create);
//listar um novo endereco 
routes.get('/usuario',UsuarioController.index);
//criar um novo endereco
routes.post('/evento',EventoController.create);
//listar um novo endereco 
routes.get('/evento',EventoController.index);
//-----------------------------------------------------------------------------------------------------------------------------------------------

module.exports = routes;