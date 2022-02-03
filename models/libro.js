const mongoose = require('mongoose');
const schema = mongoose.Schema;

const libroSchema = schema({
    titulo: String,
    autor: String,
    hojas: Number
})

module.exports = mongoose.model('libro', libroSchema)