const mongoose = require('mongoose')
const schema = mongoose.Schema;

const pagosSchema = schema({
    deudor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'deudores'
    },
    cobrador: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'cobradores'
    },
    total: Number,
    fecha: Date
})

module.exports = mongoose.model('pagos', pagosSchema)