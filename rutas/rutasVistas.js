
const express = require('express');
const interceptorError = require('../controllers/interceptorErrores');
const ControladorVista = require('../controllers/controllersVistas/controladoresVistas.js');
const rutasVista = express.Router(); 



rutasVista.use("/",interceptorError);

rutasVista.get("/", ControladorVista.vistaColeccion);

rutasVista.get("/carta/:id",ControladorVista.vistaPorId);

rutasVista.put("/carta",ControladorVista.actualizarCarta);

rutasVista.get("/insertarcarta",ControladorVista.insertarCarta);
rutasVista.post("/insertarcarta",ControladorVista.insertarCarta);


module.exports = rutasVista;

