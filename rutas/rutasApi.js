
const express = require('express');
const interceptorError = require('../controllers/interceptorErrores');
const ControladorCarta = require('../controllers/controladoresCarta');
const rutasApi = express.Router(); 




rutasApi.use("/api",interceptorError);

rutasApi.get("/api/seleccionarColeccionEntera", ControladorCarta.seleccionarColeccionEntera)





module.exports = rutasApi;