// Importando o módulo express
const express = require('express');
// Criando um objeto de roteamento do Express
const route = express.Router();
// Importando os controladores para as rotas Home e Contato
const homeController = require('./src/controller/homeController');
const contatosController = require('./src/controller/contatosController');
const formController = require('./src/controller/formController');
// Middleware personalizado para manipulação de requisições
function meuMiddleware(req, res, next){
    // Definindo dados na sessão do usuário
    req.session = {nome:'LUIZ', sobrenome:'MIRANDA'}
    // Mensagem de log indicando que o middleware foi passado
    console.log('passei no seu middleware');
    // Chama o próximo middleware na cadeia
    next();
}

// Rotas para a página inicial (Home)
route.get('/', meuMiddleware, homeController.paginaInicial, function(req, res, next){
    // Esta função de callback não parece ter uma funcionalidade específica além de um log
    // Não está chamando next(), portanto, não está passando o controle para a próxima função na cadeia de middleware
    console.log('ainda estou aqui');
})
route.get('/form',meuMiddleware, formController.formularioCadastro, function(req, res, next){
});

// Rota para lidar com requisições POST na página inicial
route.post("/form", formController.trataFormulario);

// Rota para a página de contato
route.get("/contato", contatosController.contato);

// Exporta o objeto de roteamento para ser utilizado pelo aplicativo principal
module.exports = route;
