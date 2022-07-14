const routes = require('express').Router();

const conecta = require('../configuracion/conexionBD');

routes.get('/reg',(req,res)=>{
    res.send('ruta transporte');
})

/*Lista de todos los Transportes*/
routes.get('/lista-transporte',(req,res)=>{
    let sql='select * from empresa;';
    conecta.query(sql,(err,rows, fields)=>{
if(!err)res.json(rows)
else
    conside.error(err)
        })
})

//Mostrar Detalles generales

routes.get('/detalles',(req,res)=>{
    let sql= "select paqueteria.empresa.idEmpresa, paqueteria.empresa.Nombre, paqueteria.empresa.Direccion, paqueteria.paquetes.idPaquete, paqueteria.paquetes.Peso, paqueteria.paquetes.Dimension from paqueteempresa inner join paqueteria.empresa, paqueteria.paquetes where paqueteria.paqueteempresa.idEmpresa =  paqueteria.empresa.idEmpresa and paqueteria.paqueteempresa.idPaquete = paqueteria.paquetes.idPaquete; ";
    conecta.query(sql,(err,rows, fields)=>{
    if(!err)res.json(rows)
        else
            console.error(err)
        })
})






/* Agregar un nuevo Transporte*/
routes.post('/agregar-transporte',(req,res)=>{
    const {idEmpresa, Nombre, Direccion} = req.body
    let sql = `insert into empresa(idEmpresa, Nombre, Direccion) values('${idEmpresa}','${Nombre}','${Direccion}')`
    conecta.query(sql,(err, rows, fields)=>{
        if(!err) res.json(rows)
        else {
            res.json({status:'Transporte registrado'})
        }
    })
});

/*
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

 */

/* Eliminar un Transporte*/
routes.delete('/:id',(req, res)=>{
    const{id} = req.params
    let sql =`delete from empresa where idEmpresa = '${id}'`
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
    const {Nombre, Direccion} = req.body

    let sql = `update empresa set Nombre='${Nombre}',Direccion='${Direccion}' where idEmpresa = '${id}'`
    conecta.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Transporte modificado'})
        }
    })

})

module.exports = routes;