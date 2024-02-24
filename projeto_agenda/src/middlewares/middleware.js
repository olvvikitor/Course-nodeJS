exports.middlewereGlobal = function (req,res, next){
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user;
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