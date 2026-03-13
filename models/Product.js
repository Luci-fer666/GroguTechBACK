const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    consola: {
        type: String
    },
    tipo: {
        type: String,
        enum: ['servicio', 'producto'],
        default: 'producto',
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    imagenUrl:{
        type: String
    }}, {
        timestamps: true, 
        strict: false
    }
);

const Product = mongoose.model('Product', productSchema);
module.exports = Product;