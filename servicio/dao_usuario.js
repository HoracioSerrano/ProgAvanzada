const Usuario = require('../modelo/usuario');

class Dao_Usuario {

    static async seleccionarPorId(id) {
        try {
            const usuario = await Usuario.findById(id).exec();
            return usuario || null;
        } catch (error) {
            console.error('Error en seleccionarPorId:', error);
            return null;
        }
    }

    static async seleccionarPorNombre(nombre) {
        try {
            const usuario = await Usuario.findOne({ usu_nombre: nombre }).exec();
            return usuario || null;
        } catch (error) {
            console.error('Error en seleccionarPorNombre:', error);
            return null;
        }
    }

    static async insertarUsuario(usuarioData) {
        console.log("insertarUsuario");
        try {
            const nuevoUsuario = new Usuario({
                usu_nombre: usuarioData.usu_nombre,
                usu_password: usuarioData.usu_password
            });

            await nuevoUsuario.save();
            return nuevoUsuario;
        } catch (error) {
            console.error('Error en insertarUsuario:', error);
            return null;
        }
    }
}

module.exports = { Dao_Usuario };
