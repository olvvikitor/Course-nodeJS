const express = require('express');
const route = express.Router();
const homeController = require('./src/controller/homeController');
const contatosController = require('./src/controller/contatosController');

//rotas Home
route.get('/', homeController.paginaInicial);
route.post("/", homeController.trataPost);

//rotas de contato
route.get("/contato", contatosController.contato);

module.exports=route;
