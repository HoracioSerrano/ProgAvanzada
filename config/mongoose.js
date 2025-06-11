const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect("mongodb://serranohoraciohector:31843184@prueba.46gemxi.mongodb.net/prueba", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('✔ Conectado a MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('❌ Error de conexión a MongoDB:', err.message);
});

module.exports = mongoose;
