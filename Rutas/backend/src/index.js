console.log('Hola soy servidor');

const express = require('express');
const app = express();
const port = (process.env.port || 4500);
app.set('port',port);
app.listen(app.set('port'));
app.use('/login', require('./routes/rutas'));


