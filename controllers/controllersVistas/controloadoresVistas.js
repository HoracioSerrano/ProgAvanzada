const { Carta } = require('../../modelo/carta');
const { Dao_Carta } = require('../../servicio/dao_carta');
const ejs = require('ejs');
const path = require('path');


class ControladorVista{
    static async vistaColeccion(req,res){
        const coleccion = await Dao_Carta.seleccionarColeccionEntera();
        let html = await ejs.renderFile( path.join(__dirname, '..', 'vista', 'vistaColeccion.ejs') , {people: 'people'});
        res.status(200).send(html);
    }

    static async seleccionarPorId(req,res){
        const id = req.params.id;
        const carta = await Dao_Carta.seleccionarPorId(id);
        if (carta){
            res.status(200).send(JSON.stringify(carta));
        }else{
            res.status(404).send("Carta No encontrada");
        }
    }

    static async insertarCarta(req,res){
        const carta = req.body;
        const insertada = await Dao_Carta.insertarCarta(carta);
        if (insertada){
            res.status(200).send(JSON.stringify(carta));
        }else{
            res.status(500).send("No se pudo insertar");
        }
    }

    static async actualizarCarta(req,res){
        const carta = req.body;
        const actualizada = await Dao_Carta.actualizarCarta(carta);
        if (actualizada){
            res.status(200).send(JSON.stringify(carta));
        }else{
            res.status(500).send("No se pudo actualizar");
        }
    }

    static async eliminarCarta(req,res){
        const carta = req.body;
        const eliminada = await Dao_Carta.eliminarCarta(carta);
        if (eliminada){
            res.status(200).send(JSON.stringify(carta));
        }else{
            res.status(500).send("No se pudo eliminada");
        }
    }

}

module.exports = ControladorVista;