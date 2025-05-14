class Carta {
    cta_id = null;
    cta_scryfall_id = null;
    cta_nombre = null;
    cta_uri_imagen = null;
    cta_cantidad = null;
    constructor(id, scryfall_id, nombre, uri_imagen, cantidad){
        this.cta_id = id;
        this.cta_scryfall_id = scryfall_id;
        this.cta_nombre = nombre;
        this.cta_uri_imagen = uri_imagen;
        this.cta_cantidad = cantidad;
    }
}

module.exports = { Carta };