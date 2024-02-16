exports.middlewereGlobal = function (req,res, next){
    if(req.body.cliente){
    console.log();
    console.log(`vi que voce postou no formulario de cliente${req.body.cliente}`);
    console.log();
    }
    if(req.body.empresa){
    console.log();
    console.log(`vi que voce postou no formulario de empresa${req.body.empresa}`);
    console.log();
    }
    console.log();
    console.log('PASSEI NO MIDDLEWARE GLOBAL');
    console.log();
    next();
};