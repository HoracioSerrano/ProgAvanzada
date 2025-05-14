const { Carta } = require('../modelo/carta');
const { Dao_Carta } = require('../servicio/dao_carta');

class ControladorCarta{
    static async seleccionarColeccionEntera(req,res){
        const coleccion = await Dao_Carta.seleccionarColeccionEntera();
        res.status(200).send(JSON.stringify(coleccion));
    }

    static async seleccionarPorId(req,res){
        const id = req.params.id;
        const carta = await Dao_Carta.seleccionarPorId(id);
        if (!carta){
            res.status(200).send(JSON.stringify(carta));
        }else{
            res.status(404).send("Carta No encontrada");
        }
    }

    static async insertarCarta(req,res){
        const carta = req.body;
        await Dao_Carta.insertarCarta(carta);
        if (!carta.cta_id){
            res.status(200).send(JSON.stringify(carta));
        }else{
            res.status(500).send("No se pudo insertar");
        }
    }

    static async actualizarCarta(req,res){
        const carta = req.body;
        await Dao_Carta.actualizarCarta(carta);
        res.status(200).send(JSON.stringify(carta));
    }
    
    static async eliminarCarta(req,res){
        const carta = req.body;
        await Dao_Carta.eliminarCarta(carta);
        res.status(200).send(JSON.stringify(carta));
    }

}



module.exports = ControladorCarta;