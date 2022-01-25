const mongoose = require('mongoose')
const schema = mongoose.Schema;

const pagosSchema = schema({
    deudor: Object,
    cobrador: Object,
    total: Number,
    fecha: Date
})

module.exports = mongoose.model('pagos', pagosSchema)