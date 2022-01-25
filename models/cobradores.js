const mongoose = require('mongoose')
const schema = mongoose.Schema;

const cobradoresSchema = schema({
    nombre: String,
    servicio: String,
    ruc: String,
    direccion: String
})

module.exports = mongoose.model('cobradores', cobradoresSchema)