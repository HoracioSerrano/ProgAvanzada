const express = require('express')
var methodOverride = require('method-override')
const app = express()
const config = require('dotenv').config({ path: __dirname + '/.env' }).parsed;
const port = config.PUERTO;


app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method')); // <-- debe ir antes de las rutas
app.use(express.json());

//utiliza CORS
var cors = require('cors');
app.use(cors());



const rutasVistas = require('./rutas/rutasVistas');
app.use('/', rutasVistas);

//seteo router
const rutasApi = require('./rutas/rutasApi');
app.use('/api', rutasApi);

//prioridad rutas sobre contenido estatico
app.use(express.static('Estatico'));

app.listen(port, () => {
    console.log(`Escuchando en puerto ${port}`)
});
