const mongoose = require('mongoose');
const app = require('./app')
const port = 3800;

mongoose.Promise = global.Promise;
mongoose
  .connect('mongodb+srv://kevin0994:P2xNs8KHdrYlHv0Z@cluster0.60wb9.mongodb.net/cobranzasDB?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('Conexion exitosa!!');
    app.listen(port, () => {
      console.log(`Servidor http://localhost:${port}`);
    })
  })
  .catch((err) => console.log(err));