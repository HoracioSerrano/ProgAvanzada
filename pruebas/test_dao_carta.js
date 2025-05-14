const { Dao_Carta } = require('../servicio/dao_carta');


async function test() {
/*
    let c = {cta_scryfall_id:'id scry', cta_nombre:'nombre', cta_uri_imagen:'url', cta_cantidad:'3'}

    let r = await Dao_Carta.insertarCarta(c)

    console.log(r);

 


    let c2 = {cta_id:2, cta_scryfall_id:'id scry', cta_nombre:'nombre', cta_uri_imagen:'url', cta_cantidad:'3'}

    let r2 = await Dao_Carta.actualizarCarta(c2)

    console.log(r2);
*/

    let c3 = {cta_id:2, cta_scryfall_id:'id scry', cta_nombre:'nombre', cta_uri_imagen:'url', cta_cantidad:'3'}

    let r3 = await Dao_Carta.eliminarCarta(c3)

    console.log(r3);

    console.log(await Dao_Carta.seleccionarColeccionEntera());
}

test();


