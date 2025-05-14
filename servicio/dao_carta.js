const { Dao } = require('../servicio/dao');
const { Carta } = require('../modelo/carta');

class Dao_Carta {

    static async seleccionarColeccionEntera(){
        const db = await Dao.getConeccion();
        const qry = 'SELECT * FROM cartasmagic.carta';
        const resultado = await db.execute(qry);
        await db.end();   
        const arr = resultado[0].map((x)=>{
            return new Carta(x.cta_id, x.cta_scryfall_id, x.cta_nombre, x.cta_uri_imagen, x.cta_cantidad);
        });
        return arr;
    }

    static async insertarCarta(Carta){
        const db = await Dao.getConeccion();
        const qry = 'insert into cartasmagic.carta (cta_scryfall_id, cta_nombre, cta_uri_imagen, cta_cantidad) values (?,?,?,?)';
        let resultado = await db.execute(qry,[
            Carta.cta_scryfall_id, 
            Carta.cta_nombre,
            Carta.cta_uri_imagen,
            Carta.cta_cantidad,
        ]);
        Carta.cta_id = resultado[0].insertId;
        await db.end();
        return Carta;
    }

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
        console.log(resultado);
        await db.end();
        return Carta;
    }
    
        static async eliminarCarta(Carta){
        const db = await Dao.getConeccion();
        const qry = 'delete from cartasmagic.carta where cta_id=?';
        let resultado = await db.execute(qry,[
            Carta.cta_id
        ]);
        console.log(resultado);
        await db.end();
        return Carta;
    }
    

}

module.exports = { Dao_Carta };