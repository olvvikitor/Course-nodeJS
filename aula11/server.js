//express eh um microframework para trabalhar com web

const express = require('express');
const app = express();
const routes = require("./routes");
const path = require('path')

app.use(
    express.urlencoded({
        extended:true
    })
);

app.set('views', './src/views');
app.set('view engine','ejs');
app.use(express.static('./public'));

app.use(routes);

app.listen(3000, () =>{
    console.log("acessar htt://localhost:3000");
});