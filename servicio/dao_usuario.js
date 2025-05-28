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

    static async insertarUsuario(Usuario){
        const db = await Dao.getConeccion();
        const qry = 'insert into cartasmagic.carta (usu_id, usu_nombre, usu_password) values (?,?,?)';
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
/*
    static async actualizarCarta(Carta){
        const db = await Dao.getConeccion();
        const qry = 'update cartasmagic.carta set cta_scryfall_id=?, cta_nombre=?, cta_uri_imagen=?, cta_cantidad=? where cta_id=?';
        let resultado = await db.execute(qry,[
            Carta.cta_scryfall_id, 
            Carta.cta_nombre,
            Carta.cta_uri_imagen,
            Carta.cta_cantidad,
            Carta.cta_id
        ]);
        await db.end();
        if(resultado[0].affectedRows>0){
            return Carta;
        }else{
            return null;
        }
    }
    
    static async eliminarCarta(Carta){
        const db = await Dao.getConeccion();
        const qry = 'delete from cartasmagic.carta where cta_id=?';
        let resultado = await db.execute(qry,[
            Carta.cta_id
        ]);
        await db.end();
        console.log(resultado)
        if(resultado[0].affectedRows>0){
            return Carta;
        }else{
            return null;
        }
    }
*/
}

module.exports = { Dao_Usuario };

/*Api Finalizada*/