const express = require('express');
const app = express();
app.use(express.json());
/* instalar el cors*/

const port = (process.env.port || 4500);

app.set('port',port);

app.listen(app.get('port'),(error)=>{
    if(error){
    console.log('error al iniciar el servidor: '+error)
}else{
        console.log('servidor iniciado en el prueto: '+port)
    }
});
    app.use('/paqueteria', require('./routes/rutas'));