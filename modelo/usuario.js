const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    usu_nombre: {
        type: String,
        required: true
    },
    usu_password: {
        type: String,
        required: true
    }
}, {
    collection: 'usuarios' // nombre de la colección en MongoDB
});

const Usuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = Usuario;
