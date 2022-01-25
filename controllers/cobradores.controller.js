const Cobradores = require('../models/cobradores')

function listCobradores(req, res) {
    Cobradores.find((err, cobradoresList) => {
    if (err) {
      res.status(500).send({
        message:
          'Error!, El servidor esta teniendo problemas, intente nuevamente',
      });
    } else {
      if (cobradoresList) {
        res.status(200).json({
            cobrador: cobradoresList,
        });
      }
    }
  });
}

function getCobradores(req, res) {
  const id = req.params.id;

  Cobradores.find({ _id: id }, (err, cobrador) => {
    if (err) {
      res.status(500).send({
        message:
          'Error!, El servidor esta teniendo problemas, intente nuevamente',
      });
    } else {
      if (cobrador) {
        res.status(200).json({
            cobrador: cobrador,
        });
      }
    }
  });
}

function saveCobrador(req, res){
  const cobrador = new Cobradores();
  const params = req.body;

  if (params.ruc) {
    cobrador.nombre = params.nombre;
    cobrador.servicio = params.servicio;
    cobrador.ruc = params.ruc;
    cobrador.direccion = params.direccion;

      cobrador.save((err, cobradorStored) => {
          if (err) {
              res.status(500).send({
                  message: 'Error de servidor'
              })
          } else {
              if (cobradorStored) {
                  res.status(200).send({
                    cobrador: cobradorStored
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
          message: 'ruc obligatorio'
      })
  }
}

const updateCobrador = async (req, res) => {
  let id = req.params.id;
  let update = req.body;
  Cobradores.findByIdAndUpdate(id, update, { new: true }, (err, cobradorUpdate) => {
    if (err) {
      res.status(500).send({
        message: 'Server error',
      });
    } else {
      if (cobradorUpdate) {
        res.status(200).send({
            cobrador: cobradorUpdate,
        });
      } else {
        res.status(404).send({
          message: 'Cobrador not found',
        });
      }
    }
  });
}

function deleteCobrador(req, res) {
  var id = req.params.id;
  Cobradores.findByIdAndRemove(id, (err, cobradorRemoved) => {
    if (err) {
      res.status(500).send({
        message: 'error del servidor',
      });
    } else {
      if (cobradorRemoved) {
        res.status(200).send({
            cobrador: cobradorRemoved,
        });
      } else {
        res.status(404).send({
          message: 'Cobradores not found.',
        });
      }
    }
  });
}

module.exports = {
    listCobradores, getCobradores, saveCobrador, updateCobrador, deleteCobrador
}