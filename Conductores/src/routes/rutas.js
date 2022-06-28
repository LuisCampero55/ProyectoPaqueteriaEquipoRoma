const routes = require('express').Router();
const conecta = require('../configuracion/conexionbd');

routes.get('/bd',(req,res)=>{
    let sql = "select * from conductores;"
    conecta.query(sql,(err, rows, fields)=>{
        if(!err) res.json(rows)
        else
            conside.error(err)
    })
});

routes.get('/:id',(req,res)=>{
    const {id} = req.params
    let sql = "select * from conductores where id_conduc = ?;"
    conecta.query(sql,[id],(err, rows, fields)=>{
        if(!err) res.json(rows)
        else {
            conside.error(err)
        }
    })
});

routes.post('/reg',(req,res)=>{
    const {nombre, apellido, edad, nacionalidad, licencia} = req.body
    let sql = `insert into conductores(nombre,apellido,edad,nacionalidad,licencia) values('${nombre}','${apellido}','${edad}','${nacionalidad}','${licencia}')`
    conecta.query(sql,(err, rows, fields)=>{
        if(!err) res.json(rows)
        else {
            res.json({status:'Conductor registrado'})
        }
    })
});

routes.delete('/:id',(req,res)=>{
    const {id} = req.params
    let sql = `delete from conductores where id_conduc = '${id}'`
    conecta.query(sql,(err, rows, fields)=>{
        if(!err) res.json(rows)
        else {
            res.json({status:'Conductor eliminado'})
        }
    })
})


routes.put('/:id',(req,res)=>{
    const {id} = req.params
    const {nombre, apellido, edad, nacionalidad, licencia} = req.body
    let sql = `update conductores set 
                nombre = '${nombre}',
                apellido = '${apellido}',
                edad = '${edad}',
                nacionalidad = '${nacionalidad}',
                licencia = '${licencia}'
                where id_conduc = '${id}'`
    conecta.query(sql,(err, rows, fields)=>{
        if(!err) res.json(rows)
        else {
            res.json({status:'Conductor actualizado'})
        }
    })
});

module.exports = routes;