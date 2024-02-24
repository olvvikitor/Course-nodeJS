const Login = require('../models/LoginModel')

exports.index = (req, res)=>{
    res.render('login')
    console.log(req.session.user);
}
exports.register = async(req, res, next)=>{
    try{
    const login = new Login(req.body);
    await login.register();
    if(login.errors.length>0){
        req.flash('errors', login.errors);
        req.session.save(function(){
            return res.redirect('back')
        });
        return
    }
    req.flash('success', 'Usuario criado');
        req.session.save(function(){
            return res.redirect('back')
        });
}catch(err){
    console.log(err);
    return res.render('404');
}
}
exports.login = async(req, res, next)=>{
    try {
        const login = new Login(req.body);
        await login.login();
        if(!login.user){
            req.flash('errors', login.errors);
            req.session.save(function(){
                return res.redirect('back')
            });
            return
        }
        
        req.flash('success', 'Usuario logado');
        req.session.user = login.user;
        req.session.save(function(){
            return res.redirect('/index')
        });
    } catch (error) {
        console.log(error);
    }
}
exports.logout = (req, res)=>{
    console.log(req.session.user)
    req.session.destroy();
    res.redirect('/home');
}
