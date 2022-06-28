
const ruta = require('express').Router();
const conexion = require('../config/conexion');



ruta.get('/take',(req, res)=>{
    let sql ='select * from datos_personales'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })

})



/*
ruta.post('/agregar',(req,res)=>{
    const { nombre_empresa, cp, Correo, Contraseña} = req.body
    let sql = `insert into Datos_personales(nombre_empresa, cp, Correo, Contraseña) VALUES ('${nombre_empresa}', '${cp}', '${Correo}', '${Contraseña}')`
    conexion.query(sql,(err, rows, fields)=>{
        if(!err) throw err
        else {
            res.json({status:'usuario registrado'})
        }
    })
});

 */




ruta.post('/agregar',(req,res)=>{
    const {idUsuario, nombre_empresa, cp, Correo, Contraseña} = req.body
    let sql = `insert into Datos_personales( idUsuario, nombre_empresa, cp, Correo, Contraseña) VALUES ('${idUsuario}','${nombre_empresa}', '${cp}', '${Correo}', '${Contraseña}')`
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'usuario agregado'})
        }
    })
});


ruta.delete('/:id',(req, res)=>{
    const{id} = req.params
    let sql =`delete from datos_personales where idUsuario = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Usuario eliminado'})
        }
    })
});


ruta.put('/:id',(req,res)=>{
    const {id} = req.params
    const {idUsuario, nombre_empresa, cp, Correo, Contraseña} = req.body
    let sql = `update Datos_personales set 
                idUsuario = '${idUsuario}',
                nombre_empresa = '${nombre_empresa}',
                cp = '${cp}',
                Correo = '${Correo}',
                Contraseña = '${Contraseña}',
                where idUsuario = '${id}'`
    conexion.query(sql,(err, rows, fields)=>{
        if(!err) throw err
        else {
            res.json({status:'Conductor actualizado'})
        }
    })
});


module.exports = ruta;
