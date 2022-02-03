const express = require('express');
const pagoController = require('../controllers/pagos.controller')

const api = express.Router();

api.get('/pagos', pagoController.listPagos)
api.get('/pagosfull', pagoController.getPagosFull)
api.get('/pagos/:id', pagoController.getPagos)
api.post('/pagos', pagoController.savePagos)
api.put('/pagos/:id', pagoController.updatePago)
api.delete('/pagos/:id', pagoController.deletePago)


module.exports = api