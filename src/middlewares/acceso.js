
module.exports = (req,res,next) =>{
if(req.session.usuarioLog){
    res.locals.usuarioLog = req.session.usuarioLog
}
    next();

}
