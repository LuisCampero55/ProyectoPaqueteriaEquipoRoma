const express = require('express');
const app = express();
const port = (process.env.port || 4500);
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.set('port',port);
app.listen(app.set('port'));
console.log('Hola soy servidor');

app.use('/login', require('./routes/rutas'));

