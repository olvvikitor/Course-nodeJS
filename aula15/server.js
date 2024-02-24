//variaveeis de ambiente no arquivi .env. coisas que voce nao quer exibir
require('dotenv').config();
// Importando o módulo Express.js
const express = require('express');
// Inicializando o aplicativo Express
const app = express();

const mongoose = require('mongoose');
const conctString = process.env.CONECTIONSTRING

mongoose.connect(conctString)
    .then(()=>{
    console.log('conectei a base de dados')
    app.emit('pronto');
});
//salva cookies no computer do cliente para melhorar o uso do cliente
const session = require('express-session');
//as sessoes vai ser salva no banco de dados
const MongoStore = require('connect-mongo');
//flash mensagens, bom para mandar mensagens de erros 
const flash = require('connect-flash');

// Importando as rotas definidas no arquivo routes.js
const routes = require("./routes");
// Importando o módulo path do Node.js
const path = require('path')

const helmet = require('helmet');

// Importando o middleware definido em middleware.js
const {middlewereGlobal, checkCsurfError, csurfMiddlewere} = require('./src/middlewares/middleware');

const csurf = require('csurf')

app.use(helmet());
// Middleware para análise do corpo das requisições
app.use(
    express.urlencoded({
        extended:true
    })
);
app.use(express.json());

// Configuração do diretório de views
app.set('views', './src/views');
// Configuração do mecanismo de visualização como EJS
app.set('view engine','ejs');

// Middleware para servir arquivos estáticos a partir do diretório 'public'
app.use(express.static('./public'));
// Utilização do middleware meuMiddleware em todas as rotas
const sessionOptions = session({
    secret:'mkceocms,lssowsowsokdkd',//pode ser qualquer coisa
    store:MongoStore.create({mongoUrl:process.env.CONECTIONSTRING}),
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:1000*60*60*24*7,// significa que a sessão vai ter 7 dias
        httpOnly:true
    }
});
app.use(sessionOptions)
app.use(flash()); 
app.use(csurf());
app.use(middlewereGlobal);
app.use(checkCsurfError);
app.use(csurfMiddlewere);
// Utilização das rotas definidas em routes.js
app.use(routes);

// Inicialização do servidor na porta 3000
app.on('pronto',()=>{
    app.listen(3000, () =>{
    console.log("Conectado")
    console.log("Acesse http://localhost:3000"); // Mensagem de log indicando o endereço do servidor
    });
});


