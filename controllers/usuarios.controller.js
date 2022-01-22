const Usuarios = require('../models/usuario')

function listUsuarios(req, res) {
    Usuarios.find((err, usuariosList) => {
    if (err) {
      res.status(500).send({
        message:
          'Error!, El servidor esta teniendo problemas, intente nuevamente',
      });
    } else {
      if (usuariosList) {
        res.status(200).json({
          usuarios: usuariosList,
        });
      }
    }
  });
}

function getUsuario(req, res) {
  const id = req.params.id;

  Usuarios.find({ _id: id }, (err, usuario) => {
    if (err) {
      res.status(500).send({
        message:
          'Error!, El servidor esta teniendo problemas, intente nuevamente',
      });
    } else {
      if (usuario) {
        res.status(200).json({
          usuario: usuario,
        });
      }
    }
  });
}

function saveUsuario(req, res){
  const usuario = new Usuarios();
  const params = req.body;

  if (params.cedula) {
      usuario.usuario = params.usuario;
      usuario.cedula = params.cedula;
      usuario.edad = params.edad;
      usuario.deportes = params.deportes;
      usuario.hobbies = params.hobbies;

      usuario.save((err, usuarioStored) => {
          if (err) {
              res.status(500).send({
                  message: 'Error de servidor'
              })
          } else {
              if (usuarioStored) {
                  res.status(200).send({
                      usuario: usuarioStored
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
          message: 'Cedula obligatoria'
      })
  }
}

const updateUsuario = async (req, res) => {
  let id = req.params.id;
  let update = req.body;
  Usuarios.findByIdAndUpdate(id, update, { new: true }, (err, usuarioUpdate) => {
    if (err) {
      res.status(500).send({
        message: 'Server error',
      });
    } else {
      if (usuarioUpdate) {
        res.status(200).send({
          usuario: usuarioUpdate,
        });
      } else {
        res.status(404).send({
          message: 'Usuario not found',
        });
      }
    }
  });
}

function deleteUsuario(req, res) {
  var id = req.params.id;
  Usuarios.findByIdAndRemove(id, (err, usuarioRemoved) => {
    if (err) {
      res.status(500).send({
        message: 'error del servidor',
      });
    } else {
      if (usuarioRemoved) {
        res.status(200).send({
          usuario: usuarioRemoved,
        });
      } else {
        res.status(404).send({
          message: 'usuarios not found.',
        });
      }
    }
  });
}

module.exports = {
    listUsuarios, getUsuario, saveUsuario, updateUsuario, deleteUsuario
}