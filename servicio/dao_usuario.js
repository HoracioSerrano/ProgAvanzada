const { Dao } = require('../servicio/dao');
const { Usuario } = require('../modelo/usuario');

class Dao_Usuario {



    static async seleccionarPorId(id){
        const db = await Dao.getConeccion();
        const qry = 'SELECT * FROM cartasmagic.usuario where usu_id=?';
        const resultado = await db.execute(qry,[id]);
        await db.end();
        if (resultado[0].length == 0) {
            return null;
        }else{
            const u = new Usuario();    
            u.usu_id = resultado[0][0].usu_id;
            u.usu_nombre = resultado[0][0].usu_nombre;
            u.usu_password = resultado[0][0].usu_password;
            return u;
        }
    }

    static async seleccionarPorNombre(nombre){
        const db = await Dao.getConeccion();
        const qry = 'SELECT * FROM cartasmagic.usuario where usu_nombre=?';
        const resultado = await db.execute(qry,[nombre]);
        await db.end();
        if (resultado[0].length == 0) {
            return null;
        }else{
            const u = new Usuario();    
            u.usu_id = resultado[0][0].usu_id;
            u.usu_nombre = resultado[0][0].usu_nombre;
            u.usu_password = resultado[0][0].usu_password;
            return u;
        }
    }

    static async insertarUsuario(Usuario){
        const db = await Dao.getConeccion();
        const qry = 'insert into cartasmagic.usuario (usu_nombre, usu_password) values (?,?)';
        let resultado = await db.execute(qry,[
            Usuario.usu_nombre,
            Usuario.usu_password
        ]);
        Usuario.usu_id = resultado[0].insertId;
        await db.end();
        if(resultado[0].affectedRows>0){
            return Usuario;
        }else{
            return null;
        }
    }
}

module.exports = { Dao_Usuario };
