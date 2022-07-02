const routes = require('express').Router();

const conecta = require('../configuracion/conexionBD');

routes.get('/reg',(req,res)=>{
    res.send('ruta paquetes');
})

/*Lista de todos los Paquetes*/

routes.get('/lista',(req,res)=>{
    let sql='select *from paquetes;';
    conecta.query(sql,(err,rows, fields)=>{
if(!err)res.json(rows)
else
    conside.error(err)
        })
})

/*buscar por ID*/
routes.get('/:id',(req,res)=>{
    const{id} = req.params
    let sql=`select * from paquetes where idPaquete = '${id}'`
    conecta.query(sql,(err,rows, fields)=>{
if(!err)res.json(rows)
else
    conside.error(err)
        })
})

/* Agregar un nuevo Paquete*/
routes.post('/agregar',(req,res)=>{
    const {idPaquete, Peso, Dimension} = req.body
    let sql = `insert into paquetes(idPaquete, Peso, Dimension) values('${idPaquete}','${Peso}','${Dimension}')`
    conecta.query(sql,(err, rows, fields)=>{
        if(!err) res.json(rows)
        else {
            res.json({status:'Paquete registrado'})
        }
    })
});

/* Eliminar un Paquete*/
routes.delete('/:id',(req, res)=>{
    const{id} = req.params
    let sql =`delete from paquetes where idPaquete = '${id}'`
    conecta.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Paquete eliminado'})
        }
    })
});

/* Modificar un Paquete*/
routes.put('/:id',(req, res)=>{
    const{id}=req.params
    const {idPaquete, Peso, Dimension} = req.body

    let sql = `update vehiculos set 
                Peso='${Peso}',
                Dimension='${Dimension}',
                where idvehiculos = '${id}'`
    conecta.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Paquete modificado'})
        }
    })

})

module.exports = routes;