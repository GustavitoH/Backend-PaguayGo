const express = require('express');
const deudorController = require('../controllers/deudores.controller')

const api = express.Router();

api.get('/deudores', deudorController.listDeudores)
api.get('/deudores/:id', deudorController.getDeudores)
api.post('/deudores', deudorController.saveDeudor)
api.put('/deudores/:id', deudorController.updateDeudor)
api.delete('/deudores/:id', deudorController.deleteDeudor)


module.exports = api