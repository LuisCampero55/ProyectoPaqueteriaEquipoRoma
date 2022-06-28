const express = require('express');

//express
const app = express()
app.use(express.json());
const cors = require('cors');
const port = (process.env.port || 4500);

//cors
app.use(cors())

//config
app.set('port',port);

//rutas
app.use('/login', require('./routes/rutas'));

//inciar express
app.listen(app.get('port'),(error)=>{
    if (error){
        console.log('Error al iniciar el servidor: '+error)
    }else{
        console.log('Hola hijo, puerto: '+port)
    }
});
