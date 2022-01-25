const Pagos = require('../models/pagos')

function listPagos(req, res) {
    Pagos.find((err, pagosList) => {
    if (err) {
      res.status(500).send({
        message:
          'Error!, El servidor esta teniendo problemas, intente nuevamente',
      });
    } else {
      if (pagosList) {
        res.status(200).json({
            pagos: pagosList,
        });
      }
    }
  });
}

function getPagos(req, res) {
  const id = req.params.id;

  Pagos.find({ _id: id }, (err, pagos) => {
    if (err) {
      res.status(500).send({
        message:
          'Error!, El servidor esta teniendo problemas, intente nuevamente',
      });
    } else {
      if (pagos) {
        res.status(200).json({
            pagos: pagos,
        });
      }
    }
  });
}

function savePagos(req, res){
  const pago = new Pagos();
  const params = req.body;

  if (pago) {
    pago.deudor = params.deudor;
    pago.cobrador = params.cobrador;
    pago.total = params.total;
    pago.fecha = params.fecha;

        pago.save((err, pagoStored) => {
          if (err) {
              console.log(err);
              res.status(500).send({
                  message: 'Error de servidor'
              })
          } else {
              if (pagoStored) {
                  res.status(200).send({
                    pago: pagoStored
                  })
              } else {
                  res.status(200).send({
                      message: 'No se guardo el pago'
                  })
              }
          }
      })
  } else {
      console.log(res);
      res.status(200).send({
          message: 'Deudor y cobrador son obligatorios'
          
      })
  }
}

const updatePago = async (req, res) => {
  let id = req.params.id;
  let update = req.body;
  Pagos.findByIdAndUpdate(id, update, { new: true }, (err, pagoUpdate) => {
    if (err) {
      res.status(500).send({
        message: 'Server error',
      });
    } else {
      if (pagoUpdate) {
        res.status(200).send({
            pago: pagoUpdate,
        });
      } else {
        res.status(404).send({
          message: 'Pago not found',
        });
      }
    }
  });
}

function deletePago(req, res) {
  var id = req.params.id;
  Pagos.findByIdAndRemove(id, (err, pagoRemoved) => {
    if (err) {
      res.status(500).send({
        message: 'error del servidor',
      });
    } else {
      if (pagoRemoved) {
        res.status(200).send({
            pago: pagoRemoved,
        });
      } else {
        res.status(404).send({
          message: 'pago not found.',
        });
      }
    }
  });
}

module.exports = {
    listPagos, getPagos, savePagos, updatePago, deletePago
}