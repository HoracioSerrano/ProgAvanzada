const { Usuario } = require('../../modelo/usuario');
const { Negocio_login} = require('../../servicio/negocio_login')

class ControladorLogIn{
    static async login(req,res){
        const u = req.body;
        const token = await Negocio_login.login(u.usu_nombre, u.usu_password);
        if(token){
            res.cookie('jwt',token,{
                httpOnly: true,
                secure: false,          // usar solo en HTTPS
                sameSite: 'Lax',    // o 'Lax' según tu caso
                maxAge: 2 * 60 * 60 * 1000 // 2 horas parte de milisegundos
            });
            res.status(200).send('Sesion Iniciada');
        }else{
            res.status(400).send('Error Autenticacion');
        }
    }

    static async registrarUsuario(req,res){
        const r = req.body;
        if(r.usu_password != r.usu_password2){
            res.status(400).send('Passwords no coinciden');
        }else{
            await Negocio_login.registrarUsuario(r.usu_nombre, r.usu_password);
            res.status(200).send('Usuario Registrado');
        }
    }

}



module.exports = ControladorLogIn;