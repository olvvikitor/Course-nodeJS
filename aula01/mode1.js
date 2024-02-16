const nome = 'luiz';
const sobrenome = 'miranda';
const idade =  22;

function falaNome(){
    console.log(nome);
}
exports.nome = nome;
exports.sobrenome = sobrenome;
console.log(module.exports);

class Pessoa{
    constructor(nome){
        this.nome=nome;
    }
}
exports.Pessoa = Pessoa;