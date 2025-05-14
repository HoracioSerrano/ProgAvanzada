
const express = require('express');
const interceptorError = require('../controllers/interceptorErrores');
const ControladorCarta = require('../controllers/controladoresCarta');
const rutasApi = express.Router(); 




rutasApi.use("/api",interceptorError);

rutasApi.get("/api/carta", ControladorCarta.seleccionarColeccionEntera);
rutasApi.get("/api/carta/:id", ControladorCarta.seleccionarPorId);
rutasApi.post("/api/carta", ControladorCarta.insertarCarta);
rutasApi.put("/api/carta", ControladorCarta.actualizarCarta);
rutasApi.delete("/api/carta", ControladorCarta.eliminarCarta);






module.exports = rutasApi;