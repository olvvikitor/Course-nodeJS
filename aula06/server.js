//express eh um microframework para trabalhar com web

const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send("hello world how");
});
app.get("/contatos", (req, res)=>{
    res.send("7598360");
});
app.listen(3000);