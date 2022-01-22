const mongoose = require('mongoose');
const app = require('./app')
const port = 3800;

mongoose.Promise = global.Promise;
mongoose
  .connect('mongodb://localhost:27017/db-practica', {
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