const mongoose = require('mongoose')
const schema = mongoose.Schema;

const usuarioSchema = schema({
    usuario: String,
    cedula: String,
    edad: Number,
    deportes: String,
    hobbies: String
})

module.exports = mongoose.model('usuario', usuarioSchema)