const { Usuario } = require('../../modelo/usuario');
const { Dao_Carta } = require('../../servicio/dao_carta');
const ejs = require('ejs');
const path = require('path');


class ControladorVistaLogIn{
    static async getLogIn(req,res){
        let html = await ejs.renderFile( path.join(__dirname, '../../', 'vista', 'vistaLogin.ejs'),{mensaje:'hola'});
        res.status(200).send(html);
    }

    static async vistaPorId(req,res){
        const id = req.params.id;
        const carta = await Dao_Carta.seleccionarPorId(id);
        if (carta){
            let html = await ejs.renderFile( path.join(__dirname, '../../', 'vista', 'vistaCarta.ejs') , {modo:'edicion',carta: carta, mensaje:''});
            res.status(200).send(html);
        }else{
            res.status(404).send("Carta No encontrada");
        }
    }

    static async insertarCarta(req,res){
        const carta = req.body;
        if (carta==null){
            let parametros = {modo:'insertar',carta: {}, mensaje:''};
            let html = await ejs.renderFile( path.join(__dirname, '../../', 'vista', 'vistaCarta.ejs') , parametros);
            res.status(200).send(html);
        }else{
            let c = new Carta('',carta.idScryfall,carta.txtCarta, carta.urlImagen, carta.txtCantidad);
            const insertada = await Dao_Carta.insertarCarta(c);
            if (insertada){
                let html = await ejs.renderFile( path.join(__dirname, '../../', 'vista', 'vistaCarta.ejs') , {modo:'insertar',carta: insertada, mensaje:'Carta Insertada'});
                res.status(200).send(html);
            }else{
                res.status(500).send("No se pudo insertar");
            }
        }
    }

    static async actualizarCarta(req,res){
        const cuerpo = req.body;
        const carta = new Carta();
        carta.cta_id = cuerpo.idCarta;
        carta.cta_scryfall_id = cuerpo.idScryfall;
        carta.cta_nombre = cuerpo.txtCarta;
        carta.cta_uri_imagen = cuerpo.urlImagen;
        carta.cta_cantidad = cuerpo.txtCantidad;
        const actualizada = await Dao_Carta.actualizarCarta(carta);
        if (actualizada){
            let html = await ejs.renderFile( path.join(__dirname, '../../', 'vista', 'vistaCarta.ejs') , {modo:'edicion',carta: carta, mensaje:'Carta Actualizada'});
            res.status(200).send(html);
        }else{
            res.status(500).send("No se pudo actualizar");
        }
    }

    static async eliminarCarta(req,res){
        const carta = req.body;
        let c = new Carta(carta.idCarta,carta.idScryfall,carta.txtCarta, carta.urlImagen, carta.txtCantidad);
        const eliminada = await Dao_Carta.eliminarCarta(c);
        if (eliminada){
            const coleccion = await Dao_Carta.seleccionarColeccionEntera();
            let html = await ejs.renderFile( path.join(__dirname, '../../', 'vista', 'vistaColeccion.ejs') , {cartas:coleccion, mensaje:'Carta Eliminada'});
            res.status(200).send(html);
        }else{
            res.status(500).send("No se pudo eliminada");
        }
    }

}

module.exports = ControladorVistaLogIn;