const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize'); // Asegurate de tener configurado Sequelize y exportado el `sequelize` instance

const Carta = sequelize.define('Carta', {
    cta_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cta_scryfall_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cta_nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cta_uri_imagen: {
        type: DataTypes.STRING,
        allowNull: true
    },
    cta_cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
}, {
    tableName: 'cartas',
    timestamps: false // si tu tabla no tiene columnas createdAt / updatedAt
});

module.exports = Carta;