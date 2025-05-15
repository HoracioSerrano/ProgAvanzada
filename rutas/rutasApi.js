
const express = require('express');
const interceptorError = require('../controllers/interceptorErrores');
const ControladorCarta = require('../controllers/controladoresCarta');
const rutasApi = express.Router(); 




rutasApi.use("/",interceptorError);

rutasApi.get("/carta", ControladorCarta.seleccionarColeccionEntera);
rutasApi.get("/carta/:id", ControladorCarta.seleccionarPorId);
rutasApi.post("/carta", ControladorCarta.insertarCarta);
rutasApi.put("/carta", ControladorCarta.actualizarCarta);
rutasApi.delete("/carta", ControladorCarta.eliminarCarta);






module.exports = rutasApi;