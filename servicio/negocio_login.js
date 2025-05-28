const {Dao_Usuario} = require('./dao_usuario');

class Negecio_login {
    static async validarUsuario(id,pass) {
        const usuario = await Dao_Usuario.seleccionarPorId(id);
        if (usuario == null) return false;
        if (usuario.usu_password != pass) return false;
        return true;
    }




}