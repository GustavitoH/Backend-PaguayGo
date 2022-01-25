const mongoose = require('mongoose')
const schema = mongoose.Schema;

const deudoresSchema = schema({
    cedula: String,
    nombre: String,
    telefono: String,
    correo: String
})

module.exports = mongoose.model('deudores', deudoresSchema)