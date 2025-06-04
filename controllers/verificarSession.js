const { Negocio_login} = require('../servicio/negocio_login')

async function verificarSession(req,res,next){
    const tieneSesion = await Negocio_login.authSession(req);
    if (tieneSesion) {
        next(); // tiene sesión, continúa
    } else {
        res.redirect('/login'); // no tiene sesión, redirige
    }
}

module.exports = verificarSession;