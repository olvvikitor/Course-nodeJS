// Importando o módulo express
const express = require('express');
// Criando um objeto de roteamento do Express
const route = express.Router();
const homeController = require('./src/controller/homeController');
const loginController = require('./src/controller/loginController');

//rotas home
route.get('/index', homeController.index);
route.get('/home', homeController.home);

//rotas de login
route.get('/login/index', loginController.index);

route.post('/login/register', loginController.register);

route.post('/login/login', loginController.login);

route.get('/login/logout', loginController.logout);

module.exports = route;
