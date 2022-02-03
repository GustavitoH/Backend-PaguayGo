const express = require('express');
const libroController = require('../controllers/libros.controller');

const api = express.Router();

//Routes
api.get('/libros', libroController.listLibros)
api.get('/libros/:id', libroController.getLibro)
api.post('/libros', libroController.saveLibro)
api.put('/libros/:id', libroController.updateLibros)
api.delete('/libros/:id', libroController.deleteLibro)

module.exports = api