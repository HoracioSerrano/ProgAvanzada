
const express = require('express');
const interceptorError = require('../controllers/interceptorErrores');
const verificarSession = require('../controllers/verificarSession.js');
const ControladorVista = require('../controllers/controllersVistas/controladoresVistas.js');
const ControladorVistaLogIn = require('../controllers/controllersVistas/controladoresVistasLogin.js');
const rutasVista = express.Router(); 
const session = require('express-session');

//rutas Cartas
rutasVista.use("/",interceptorError);

rutasVista.use("/", session({
  secret: 'yourSecretKey',           // Change this to a secure secret
  resave: false,                     // Don't save session if unmodified
  saveUninitialized: false,          // Don't create session until something is stored
  cookie: { maxAge: 60000 }          // Session expires in 1 minute (adjust as needed)
}));



rutasVista.get("/", verificarSession, ControladorVista.vistaColeccion);
rutasVista.get("/carta/:id",verificarSession, ControladorVista.vistaPorId);
rutasVista.delete("/carta", verificarSession, ControladorVista.eliminarCarta);
rutasVista.put("/carta",verificarSession, ControladorVista.actualizarCarta);
rutasVista.get("/insertarcarta",verificarSession, ControladorVista.insertarCarta);
rutasVista.post("/insertarcarta",verificarSession, ControladorVista.insertarCarta);





//rutas Log In
rutasVista.get("/login", ControladorVistaLogIn.getLogIn);
rutasVista.post("/login", ControladorVistaLogIn.postLogIn);







module.exports = rutasVista;

