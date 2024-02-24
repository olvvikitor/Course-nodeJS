
// Controlador para renderizar a página inicial
exports.paginaInicial = (req, res) => {
    console.log(req.flash('error'))
    res.render('index'); // Renderiza a página index
    return;;
};

// Controlador para lidar com requisições POST
exports.trataPost = (req, res) => {
    res.send(req.body); 
};
