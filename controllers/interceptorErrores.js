async function interceptorError(req,res,next){
    try{
        next();
    }catch(e){
        let codigo = e.codigo || 500;
        let mensaje = e.mensaje;
        console.log(e);
        res.status(codigo).send(mensaje);
    }
}

module.exports = interceptorError;