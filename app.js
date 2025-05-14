const express = require('express')
const app = express()
const config = require('dotenv').config({ path: __dirname + '/.env' }).parsed;
const port = config.PUERTO;


//parseo request body
app.use(express.json());
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
