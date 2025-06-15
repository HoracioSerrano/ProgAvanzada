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
app.use(cors({
  origin: ['http://localhost:3001',  'http://localhost:5173'], // o tu dominio React
  credentials: true
}));


const rutasVistas = require('./rutas/rutasVistas');
app.use('/', rutasVistas);

//seteo router
const rutasApi = require('./rutas/rutasApi');
app.use('/api', rutasApi);

//prioridad rutas sobre contenido estatico
app.use(express.static('Estatico'));








const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://serranohoraciohector:31843184@prueba.46gemxi.mongodb.net/?retryWrites=true&w=majority&appName=prueba", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('✔ Conectado a MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('❌ Error de conexión a MongoDB:', err.message);
});




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
