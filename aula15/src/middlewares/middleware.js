exports.middlewereGlobal = function (req,res, next){
    res.locals.umaVariavelLocal = 'este valor eh da variavel local';
    next();
};
exports.outroMiddlewere = (req, res, next)=>{
    next();
};
exports.checkCsurfError = ( err, req,res, next)=>{
    if(err && err.code === 'EBADCSRFTOKEN'){
        return res.render('404');
    };
};
exports.csurfMiddlewere = (req, res, next)=>{
    res.locals.csrfToken = req.csrfToken();
    next();
}