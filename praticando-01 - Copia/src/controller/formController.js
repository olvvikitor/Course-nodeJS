const FormModel = require('../models/FormModel');

exports.formularioCadastro = (req, res, next) => {
    console.log('respondendo cliente'); // Mensagem de log indicando que o servidor está respondendo ao cliente
    res.render('acess');
    next();
};

exports.trataFormulario = (req, res, next) => {
    const { email, password, confirmPassword } = req.body;

    // Verifica se a senha e a confirmação de senha correspondem
    if (password !== confirmPassword) {
        return res.status(400).send("As senhas não coicidem")}
    // Se a senha e a confirmação de senha estiverem corretas, cria um novo registro no banco de dados
    FormModel.create({
        email: email,
        senha: password,
    })
    .then(dados => {
        console.log(dados);
        res.send(dados); // Envie a resposta de volta ao cliente com os dados do novo registro
    })
    .catch(e => {
        console.error(e);
        res.status(500).send("Ocorreu um erro ao processar o formulário."); // Se ocorrer um erro, envie uma resposta de erro ao cliente
    });
};
