// Controlador para renderizar a página inicial
exports.paginaInicial = (req, res, next) => {
    console.log('respondendo cliente'); // Mensagem de log indicando que o servidor está respondendo ao cliente
    res.render('index'); // Renderiza a página index
    console.log("EU ESTOU AQUI homeCOntroller.paginaInicial"); // Mensagem de log para indicar a execução desta função
    console.log(`MEUs DADOS RECEBIDOS DA ROTA ${req.session.nome}+ ${req.session.sobrenome}`); // Log dos dados recebidos da sessão do usuário
    next(); // Chama a próxima função no middleware stack
    return; // Retorna após completar a resposta
};

// Controlador para lidar com requisições POST
exports.trataPost = (req, res) => {
    res.send(req.body); // Envia de volta o corpo da requisição como resposta
    // req.body contém os dados enviados no corpo da requisição
    // Pode ser usado para processar formulários enviados pelo cliente
    // No caso de um formulário HTML, pode-se acessar os campos específicos usando req.body.nome-definido-no-formulario-html
};
