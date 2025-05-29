
const express = require('express');
const interceptorError = require('../controllers/interceptorErrores');
const verificarJWT = require('../controllers/verificarJWT');
const ControladorCarta = require('../controllers/controllersApis/controladoresCarta');
const ControladorLogIn = require('../controllers/controllersApis/controladoresLogin');
const rutasApi = express.Router(); 




rutasApi.use("/",interceptorError);

rutasApi.use("/carta",verificarJWT);

rutasApi.get("/carta", ControladorCarta.seleccionarColeccionEntera);
rutasApi.get("/carta/:id", ControladorCarta.seleccionarPorId);
rutasApi.post("/carta", ControladorCarta.insertarCarta);
rutasApi.put("/carta", ControladorCarta.actualizarCarta);
rutasApi.delete("/carta", ControladorCarta.eliminarCarta);

rutasApi.post("/login", ControladorLogIn.login);
rutasApi.post("/registrarUsuario", ControladorLogIn.registrarUsuario);



module.exports = rutasApi;