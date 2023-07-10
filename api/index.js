const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorHandler')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whitelist = ['http://192.168.10.17:5500', 'http://localhost:3000', 'http://localhost:3000', 'https://myapp.co'];

const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('No permitido'));
    }
  }
}


// const options = {
//   origin: (origin, callback) => {
//     if (whitelist.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('No permitido'));
//     }
//   }
// }

app.use(cors(options));

app.get('/api', (req, res) => {
  res.send('Hola mi server en express');
})

app.get('/api/nueva-ruta', (req, res) => {
  res.send('Hola soy una nueva ruta');
})

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`La aplicación se esta escuchando en http://localhost:${port}`);
});
