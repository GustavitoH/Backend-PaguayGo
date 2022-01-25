const mongoose = require('mongoose')
const schema = mongoose.Schema;

const reporteSchema = schema({
    deudor: String,
    cobrador: String,
    servicio: String,
    fecha: Date
})

module.exports = mongoose.model('reportes', reporteSchema)