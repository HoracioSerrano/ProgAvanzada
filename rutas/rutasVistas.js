
const express = require('express');
const interceptorError = require('../controllers/interceptorErrores');
const ControladorVista = require('../controllers/controloadoresVistas');
const rutasVista = express.Router(); 




rutasVista.use("/",interceptorError);

rutasVista.get("/", ControladorVista.vistaColeccion);



module.exports = rutasVista;

