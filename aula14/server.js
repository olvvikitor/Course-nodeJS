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
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

// Importando as rotas definidas no arquivo routes.js
const routes = require("./routes");
// Importando o módulo path do Node.js
const path = require('path')
// Importando o middleware definido em middleware.js
const {middlewereGlobal} = require('./src/middlewares/middleware');

// Middleware para análise do corpo das requisições
app.use(
    express.urlencoded({
        extended:true
    })
);

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

app.use(middlewereGlobal);
// Utilização das rotas definidas em routes.js
app.use(routes);

// Inicialização do servidor na porta 3000
app.on('pronto',()=>{
    app.listen(3000, () =>{
    console.log("Conectado")
    console.log("Acesse http://localhost:3000"); // Mensagem de log indicando o endereço do servidor
    });
});


