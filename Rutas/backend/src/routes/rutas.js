const routes = require('express').Router();
const conecta = require('../configuracion/conexionBD');

routes.get('/reg',(req,res)=>{
    res.send('ruta login');
})

//Mostrar lista de rutas
routes.get('/bd',(req,res)=>{
    let sql= "select * from ruta";
    conecta.query(sql,(err,rows, fields)=>{
    if(!err)res.json(rows)
        else
            console.error(err)
        })
})

//Mostrar ruta por ID
routes.get('/:id',(req,res)=>{
    const{id} = req.params
    let sql= `select * from ruta where idruta = '${id}'`
    conecta.query(sql,(err,rows, fields)=>{
    if(!err)res.json(rows)
        else
            console.error(err)
        })
})

//Eliminar un registro por ID
routes.delete('/:id',(req,res)=>{
    const{id} = req.params
    let sql= `delete from ruta where idruta = '${id}'`
    conecta.query(sql,(err,rows, fields)=>{
    if(!err)res.json(rows)
        else
            console.error(err)
        })
})

//Insertar un registro
routes.post('/insert',(req,res)=>{
    const{idruta,cp,idvehiculo} = req.body
    let sql= `insert into ruta (idruta, cp, idvehiculo) value ('${idruta}','${cp}','${idvehiculo}')`
    conecta.query(sql,(err,rows, fields)=>{
    if(!err)res.json(rows)
        else
            console.error(err)
        })
})

//Modificar un registro
routes.put('/:id',(req, res)=>{
    const{id} = req.params
    const {idruta, cp, idvehiculo} = req.body
    let sql = `update ruta set 
                cp='${cp}',
                idvehiculo='${idvehiculo}',
                where idruta = '${idruta}'`
    conecta.query(sql, (err, rows, fields)=>{
    if(err) throw err
        else{
            res.json({status: 'Ruta Modificado'})
        }
    })
})

























/*

//Mostrar lista de usuarios
routes.get('/bd',(req,res)=>{
    let sql= "select * from users";
    conecta.query(sql,(err,rows, fields)=>{
    if(!err)res.json(rows)
        else
            console.error(err)
        })
})

//Mostrar lista de usuarios por ID
routes.get('/:id',(req,res)=>{
    const{id} = req.params
    let sql= `select * from users where iduser = '${id}'`
    conecta.query(sql,(err,rows, fields)=>{
    if(!err)res.json(rows)
        else
            console.error(err)
        })
})

//Eliminar un registro por ID
routes.delete('/:id',(req,res)=>{
    const{id} = req.params
    let sql= `delete from users where iduser = '${id}'`
    conecta.query(sql,(err,rows, fields)=>{
    if(!err)res.json(rows)
        else
            console.error(err)
        })
})

//Insertar un registro
routes.post('/insert',(req,res)=>{
    const{iduser,nombre} = req.body
    let sql= `insert into user (iduser, nombre) value ('${iduser}','${nombre}')`
    conecta.query(sql,(err,rows, fields)=>{
    if(!err)res.json(rows)
        else
            console.error(err)
        })
})

//Modificar un registro
routes.put('/:id',(req, res)=>{
    const{id} = req.params
    const {iduser,nombre} = req.body
    let sql = `update users set 
                nombre='${nombre}',
                where iduser = '${iduser}'`
    conecta.query(sql, (err, rows, fields)=>{
    if(err) throw err
        else{
            res.json({status: 'Usuario Modificado'})
        }
    })
})

*/

module.exports = routes;