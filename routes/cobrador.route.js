const express = require('express');
const cobradorController = require('../controllers/cobradores.controller')

const api = express.Router();

api.get('/cobradores', cobradorController.listCobradores)
api.get('/cobradores/:id', cobradorController.getCobradores)
api.post('/cobradores', cobradorController.saveCobrador)
api.put('/cobradores/:id', cobradorController.updateCobrador)
api.delete('/cobradores/:id', cobradorController.deleteCobrador)


module.exports = api