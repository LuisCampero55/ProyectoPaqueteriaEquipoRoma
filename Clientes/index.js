const express = require('express');
const port = (process.env.port || 3000);
const app = express();


app.use(express.json())
const cors = require('cors');
app.use(cors());
app.set('port', port);
app.listen(app.set('port'));
console.log("Base de datos conecteed bro ");

app.use('/usuarios', require('./routes/Rutas'));
