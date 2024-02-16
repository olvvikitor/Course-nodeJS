//express eh um microframework para trabalhar com web

const express = require('express');
const app = express();

app.use(
    express.urlencoded({
        extended:true
    })
);

app.get('/', (req, res)=>{
    res.send(`<form action ="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button>ola mundo</button>
    </form>`);
});
app.get("/contatos", (req, res)=>{
    res.send("7598360");
});
app.post('/',(req,res)=>{
    console.log(req.body);
    res.send("enviado")
})


app.listen(3000);