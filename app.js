const express = require('express')
var methodOverride = require('method-override')
const app = express()
const config = require('dotenv').config({ path: __dirname + '/.env' }).parsed;
const port = config.PUERTO;
const cookieParser = require('cookie-parser');
const sequelize = require('./config/sequelize');

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method')); // <-- debe ir antes de las rutas
app.use(express.json());
app.use(cookieParser());

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


sequelize.sync({ alter: true }) // o { force: true } si querés recrearla desde cero
    .then(() => {
        console.log('✔ Base de datos sincronizada');
        app.listen(port, () => {
            console.log(`Escuchando en puerto ${port}`);
        });
    })
    .catch(err => {
        console.error('❌ Error al sincronizar la base de datos:', err.message);
        process.exit(1);
    });
/*
app.listen(port, () => {
    console.log(`Escuchando en puerto ${port}`)
});*/
