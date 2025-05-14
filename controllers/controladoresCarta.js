const { Carta } = require('../modelo/carta');
const { Dao_Carta } = require('../servicio/dao_carta');

class ControladorCarta{
    static async seleccionarColeccionEntera(req,res){
        const coleccion = await Dao_Carta.seleccionarColeccionEntera();
        res.status(200).send(JSON.stringify(coleccion));
    }
}



module.exports = ControladorCarta;