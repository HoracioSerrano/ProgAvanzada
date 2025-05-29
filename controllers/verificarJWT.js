const { Negocio_login} = require('../servicio/negocio_login')

async function verificarJWT(req,res,next){
    try{
        const valida = await Negocio_login.verificarJWT(req.cookies.jwt);
        if (valida==null){
            res.status(400).send('Sesion expirada');
        }else{
            next();
        }
    }catch(e){
        let codigo = e.codigo || 500;
        let mensaje = e.mensaje;
        console.log(e);
        res.status(codigo).send(mensaje);
    }
}

module.exports = verificarJWT;