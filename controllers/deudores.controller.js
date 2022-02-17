const Deudores = require('../models/deudores')

function listDeudores(req, res) {
    Deudores.find((err, deudoresList) => {
    if (err) {
      res.status(500).send({
        message:
          'Error!, El servidor esta teniendo problemas, intente nuevamente',
      });
    } else {
      if (deudoresList) {
        res.status(200).json({
          deudores: deudoresList,
        });
      }
    }
  });
}

function getDeudores(req, res) {
  const id = req.params.id;

  Deudores.find({ _id: id }, (err, deudor) => {
    if (err) {
      res.status(500).send({
        message:
          'Error!, El servidor esta teniendo problemas, intente nuevamente',
      });
    } else {
      if (deudor) {
        res.status(200).json({
            deudor: deudor,
        });
      }
    }
  });
}


function getDeudoresByCorreo(req, res) {
  const {correo, cedula} = req.body;
  Deudores.find({ correo: correo , cedula: cedula}, (err, deudor) => {
    if (err) {
      res.status(500).send({
        message:
          'Error!, El servidor esta teniendo problemas, intente nuevamente',
      });
    } else {
      if (deudor) {
        res.status(200).json({
            deudor: deudor,
        });
      }
    }
  });
}

function saveDeudor(req, res){
  const deudor = new Deudores();
  const params = req.body;

  if (params.cedula) {
      deudor.cedula = params.cedula;
      deudor.nombre = params.nombre;
      deudor.telefono = params.telefono;
      deudor.correo = params.correo;

      deudor.save((err, deudorStored) => {
          if (err) {
              res.status(500).send({
                  message: 'Error de servidor'
              })
          } else {
              if (deudorStored) {
                  res.status(200).send({
                    deudor: deudorStored
                  })
              } else {
                  res.status(200).send({
                      message: 'No se guardo el deudor'
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

const updateDeudor = async (req, res) => {
  let id = req.params.id;
  let update = req.body;
  Deudores.findByIdAndUpdate(id, update, { new: true }, (err, deudorUpdate) => {
    if (err) {
      res.status(500).send({
        message: 'Server error',
      });
    } else {
      if (deudorUpdate) {
        res.status(200).send({
            deudor: deudorUpdate,
        });
      } else {
        res.status(404).send({
          message: 'Deudores not found',
        });
      }
    }
  });
}

function deleteDeudor(req, res) {
  var id = req.params.id;
  Deudores.findByIdAndRemove(id, (err, deudorRemoved) => {
    if (err) {
      res.status(500).send({
        message: 'error del servidor',
      });
    } else {
      if (deudorRemoved) {
        res.status(200).send({
            deudor: deudorRemoved,
        });
      } else {
        res.status(404).send({
          message: 'deudores not found.',
        });
      }
    }
  });
}

module.exports = {
    listDeudores, 
    getDeudores, 
    getDeudoresByCorreo, 
    saveDeudor, 
    updateDeudor, 
    deleteDeudor
}