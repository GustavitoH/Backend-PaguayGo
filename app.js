const express = require('express');
const app = express();

//Cargar Rutas
const deudoresRoutes = require('./routes/deudor.route')
const cobradoresRoutes = require('./routes/cobrador.route')
const pagosRoutes = require('./routes/pago.route')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Rutas Base
app.use('/api', deudoresRoutes,cobradoresRoutes,pagosRoutes)

//Rutas 
app.get('/', (req, res)=>{
    res.status(200).send({
        mensaje: 'Ruta de prueba de API Rest'
    })
})


module.exports = app
