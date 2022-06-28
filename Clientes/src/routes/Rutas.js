
const ruta = require('express').Router();
const conexion = require('../config/conexion');



ruta.get('/',(req, res)=>{

    res.send('Wenas')
});


routes.post('/agregar',(req,res)=>{
    const {idUsuario, nombre_empresa, cp, Correo, Contraseña} = req.body
    let sql = 'select * from datos_personales'
    conecta.query(sql,(err, rows, fields)=>{
        if(!err) res.json(rows)
        else {
            res.json({status:'usuario registrado'})
        }
    })
});

routes.delete('/:id',(req, res)=>{
    const{id} = req.params
    let sql =`delete from datos_personales where idUsuarios = '${id}'`
    conecta.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Usuario eliminado'})
        }
    })
});











module.exports = ruta;
