const  Usuario  = require('../modelo/usuario');
const {Dao_Usuario} = require('./dao_usuario');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const secret = 'mi ultra super espcial secreto';

class Negocio_login {
    static async validarUsuario(usu,pass) {
        const usuario = await Dao_Usuario.seleccionarPorNombre(usu);
        if (usuario == null || usuario == undefined) return false;
        const machean = await bcrypt.compare(pass,usuario.usu_password);
        //console.log(machean);
        if (machean==false) {return false}else{return true;}
    }

    static async generarJWT(payload){
        const token = jwt.sign(payload, secret, { expiresIn: '30m', algorithm: 'HS256' });
        //console.log('Token:', token);
        return token;
    }


    static async login(usu,pass){
        const valido = await this.validarUsuario(usu,pass);
        console.log(valido);
        if (valido) {
            return this.generarJWT({id:usu})
        } else {
            return null;
        }
    }


    static async verificarJWT(token) {
        try {
            const payload = jwt.verify(token, secret);
            console.log('Payload:', payload);
            return payload;
        }catch(e){
            console.log('Firma invalida o Token Expirado')
            return null;
        }
    }


    static async registrarUsuario(usu,pass){
        const hash = await bcrypt.hash(pass,10);
        const u = new Usuario();
        u.usu_nombre=usu; 
        u.usu_password=hash;
        await Dao_Usuario.insertarUsuario(u);
        return true;
    }

    static async authSession(req) {
        if (req.session.user) {
            return true; // tiene sesión, continúa
        } else {
            return false; // no tiene sesión, redirige
        }
    }
}
module.exports = {Negocio_login};