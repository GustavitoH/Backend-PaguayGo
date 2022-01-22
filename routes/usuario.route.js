const express = require('express');
const usuarioController = require('../controllers/usuarios.controller')

const api = express.Router();

api.get('/usuarios', usuarioController.listUsuarios)
api.get('/usuarios/:id', usuarioController.getUsuario)
api.post('/usuarios', usuarioController.saveUsuario)
api.put('/usuarios/:id', usuarioController.updateUsuario)
api.delete('/usuarios/:id', usuarioController.deleteUsuario)


module.exports = api