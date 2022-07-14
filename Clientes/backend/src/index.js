const express = require('express');
const port = (process.env.port || 4500);
const app = express();

//admitir
app.use(express.json())
const cors = require('cors');
app.use(cors());
app.set('port', port);

app.listen(app.set('port'));
console.log("Conexion exitosa");

app.use('/paqueteria', require('./routes/Rutas'));



