// dao/Dao_Carta.js
const Carta = require('../modelo/carta');

class Dao_Carta {

    static async seleccionarColeccionEntera() {
        const cartas = await Carta.findAll();
        return cartas;
    }

    static async seleccionarPorId(id) {
        const carta = await Carta.findByPk(id);
        return carta; // retorna null si no existe
    }

    static async insertarCarta(cartaData) {
        const carta = await Carta.create({
            cta_scryfall_id: cartaData.cta_scryfall_id,
            cta_nombre: cartaData.cta_nombre,
            cta_uri_imagen: cartaData.cta_uri_imagen,
            cta_cantidad: cartaData.cta_cantidad
        });
        return carta;
    }

    static async actualizarCarta(cartaData) {
        const carta = await Carta.findByPk(cartaData.cta_id);
        if (!carta) return null;

        await carta.update({
            cta_scryfall_id: cartaData.cta_scryfall_id,
            cta_nombre: cartaData.cta_nombre,
            cta_uri_imagen: cartaData.cta_uri_imagen,
            cta_cantidad: cartaData.cta_cantidad
        });

        return carta;
    }

    static async eliminarCarta(cartaData) {
        const carta = await Carta.findByPk(cartaData.cta_id);
        if (!carta) return null;
        await carta.destroy();
        return carta;
    }
}

module.exports = { Dao_Carta };
