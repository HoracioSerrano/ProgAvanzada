const express = require('express')
var methodOverride = require('method-override')
const app = express()
const config = require('dotenv').config({ path: __dirname + '/.env' }).parsed;
const port = config.PUERTO;


//parseo request body
app.use(express.json());
app.use(express.urlencoded());
app.use(methodOverride('X-HTTP-Method-Override'));

//utiliza CORS
var cors = require('cors');
app.use(cors());


//seteo router
const router = require('./rutas/router');
app.use('/', router);

//prioridad rutas sobre contenido estatico
app.use(express.static('Estatico'));

app.listen(port, () => {
    console.log(`Escuchando en puerto ${port}`)
});
