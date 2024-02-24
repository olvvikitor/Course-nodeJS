// Importando o módulo express
const express = require('express');
// Criando um objeto de roteamento do Express
const route = express.Router();
// Importando os controladores para as rotas Home e Contato
const homeController = require('./src/controller/homeController');
const contatosController = require('./src/controller/contatosController');

// Middleware personalizado para manipulação de requisições
function meuMiddleware(req, res, next){
    // Mensagem de log indicando que o middleware foi passado
    console.log('passei no seu middleware');
    // Chama o próximo middleware na cadeia
    next();
}

// Rotas para a página inicial (Home)
route.get('/', meuMiddleware, homeController.paginaInicial, function(req, res){
    // Esta função de callback não parece ter uma funcionalidade específica além de um log
    // Não está chamando next(), portanto, não está passando o controle para a próxima função na cadeia de middleware
    console.log('ainda estou aqui');
})

// Rota para lidar com requisições POST na página inicial
route.post("/", homeController.trataPost);

// Rota para a página de contato
route.get("/contato", contatosController.contato);

// Exporta o objeto de roteamento para ser utilizado pelo aplicativo principal
module.exports = route;
