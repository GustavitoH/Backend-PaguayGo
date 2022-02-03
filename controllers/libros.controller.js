const Libros = require('../models/libro');

function listLibros(req, res) {
    Libros.find((err, librosList) => {
    if (err) {
      res.status(500).send({
        message:
          'Error!, El servidor esta teniendo problemas, intente nuevamente',
      });
    } else {
      if (librosList) {
        res.status(200).json({
          libros: librosList,
        });
      }
    }
  });
}

function getLibro(req, res) {
    const libroid = req.params.id;
  
    Libros.find({ _id: libroid }, (err, libro) => {
      if (err) {
        res.status(500).send({
          message:
            'Error!, El servidor esta teniendo problemas, intente nuevamente',
        });
      } else {
        if (libro) {
          res.status(200).json({
            libro: libro,
          });
        }
      }
    });
  }

function saveLibro(req, res){
    const libro = new Libros();
    const params = req.body;

    if (params.titulo) {
        libro.titulo = params.titulo;
        libro.autor = params.autor;
        libro.hojas = params.hojas;

        libro.save((err, libroStored) => {
            if (err) {
                res.status(500).send({
                    message: 'Error de servidor'
                })
            } else {
                if (libroStored) {
                    res.status(200).send({
                        libro: libroStored
                    })
                } else {
                    res.status(200).send({
                        message: 'No se guardo el libro'
                    })
                }
            }
        })
    } else {
        res.status(200).send({
            message: 'Titulo obligatorio'
        })
    }
}

const updateLibros = async (req, res) => {
    let id = req.params.id;
    let update = req.body;
    Libros.findByIdAndUpdate(id, update, { new: true }, (err, libroUpdate) => {
      if (err) {
        res.status(500).send({
          message: 'Server error',
        });
      } else {
        if (libroUpdate) {
          res.status(200).send({
            libro: libroUpdate,
          });
        } else {
          res.status(404).send({
            message: 'Book not found',
          });
        }
      }
    });
}

function deleteLibro(req, res) {
    var id = req.params.id;
    Libros.findByIdAndRemove(id, (err, libroRemoved) => {
      if (err) {
        res.status(500).send({
          message: 'error del servidor',
        });
      } else {
        if (libroRemoved) {
          res.status(200).send({
            libro: libroRemoved,
          });
        } else {
          res.status(404).send({
            message: 'no hay libros...',
          });
        }
      }
    });
}

module.exports = {
    listLibros, getLibro, saveLibro, updateLibros, deleteLibro
}