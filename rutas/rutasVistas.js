
const express = require('express');
const interceptorError = require('../controllers/interceptorErrores');
const ControladorVista = require('../controllers/controllersVistas/controladoresVistas.js');
const ControladorVistaLogIn = require('../controllers/controllersVistas/controladoresVistasLogin.js');
const rutasVista = express.Router(); 


//rutas Cartas
rutasVista.use("/",interceptorError);
rutasVista.get("/", ControladorVista.vistaColeccion);
rutasVista.get("/carta/:id",ControladorVista.vistaPorId);
rutasVista.delete("/carta", ControladorVista.eliminarCarta);
rutasVista.put("/carta",ControladorVista.actualizarCarta);
rutasVista.get("/insertarcarta",ControladorVista.insertarCarta);
rutasVista.post("/insertarcarta",ControladorVista.insertarCarta);

//rutas Log In
rutasVista.get("/login", ControladorVistaLogIn.getLogIn);







module.exports = rutasVista;

