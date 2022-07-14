const routes = require('express').Router();

const conecta = require('../configuracion/conexionBD');

routes.get('/reg',(req,res)=>{
    res.send('ruta transporte');
})

/*Lista de todos los Transportes*/
routes.get('/lista-transporte',(req,res)=>{
    let sql='select *from transporte;';
    conecta.query(sql,(err,rows, fields)=>{
if(!err)res.json(rows)
else
    conside.error(err)
        })
})

//Mostrar Detalles de los Transportes y rutas
routes.get('/detalles',(req,res)=>{
    let sql= "SELECT * FROM ruta INNER JOIN transruta on ruta.idruta = transruta.idtransruta INNER JOIN transporte on transruta.idtransruta = transporte.idtransporte";
    conecta.query(sql,(err,rows, fields)=>{
    if(!err)res.json(rows)
        else
            console.error(err)
        })
})

/*buscar por ID*/
routes.get('/:id-transporte',(req,res)=>{
    const{id} = req.params
    let sql=`select * from transporte where idTransporte = '${id}'`
    conecta.query(sql,(err,rows, fields)=>{
if(!err)res.json(rows)
else
    conside.error(err)
        })
})

/* Agregar un nuevo Transporte*/
routes.post('/agregar-transporte',(req,res)=>{
    const {idTransporte, Placas, Tipo} = req.body
    let sql = `insert into transporte(idTransporte, Placas, Tipo) values('${idTransporte}','${Placas}','${Tipo}')`
    conecta.query(sql,(err, rows, fields)=>{
        if(!err) res.json(rows)
        else {
            res.json({status:'Transporte registrado'})
        }
    })
});

/* Eliminar un Transporte*/
routes.delete('/:id',(req, res)=>{
    const{id} = req.params
    let sql =`delete from transporte where idTransporte = '${id}'`
    conecta.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Transporte eliminado'})
        }
    })
});

/* Modificar un Transporte*/
routes.put('/transporte/:id',(req, res)=>{
    const{id}=req.params
    const {Placas, Tipo} = req.body

    let sql = `update transporte set Placas='${Placas}',Tipo='${Tipo}' where idTransporte = '${id}'`
    conecta.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Transporte modificado'})
        }
    })

})
module.exports = routes;
