
exports.index = (req, res) => {
    if(!req.session.user){
        res.send('Usuario não autenticado ')
    }
    res.render('index'); // Renderiza a página index
};
exports.home = (req, res) => {
    res.render('home'); // Renderiza a página index
};

