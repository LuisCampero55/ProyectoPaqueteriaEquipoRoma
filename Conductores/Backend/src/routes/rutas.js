const routes = require('express').Router();
const conecta = require('../configuracion/conexionbd');


//Datos personales
routes.get('/datos',(req,res)=>{
    let sql = "select * from datospersonales;"
    conecta.query(sql,(err, rows, fields)=>{
        if(!err) res.json(rows)
        else
            console.error(err)
    })
});
//Obtener conductores con datos
routes.get('/conduc',(req,res)=>{
    let sql = "select idConductor,nombre,apellido,edad,licencia,idTransRuta from conductores inner join datospersonales where conductores.idDatos = datospersonales.idDatos;"
    conecta.query(sql,(err, rows, fields)=>{
        if(!err) res.json(rows)
        else
            console.error(err)
    })
});
//Todos los conductores
routes.get('/conductores',(req,res)=>{
    let sql = "SELECT * FROM conductores;"
    conecta.query(sql,(err, rows, fields)=>{
        if(!err) res.json(rows)
        else
            console.error(err)
    })
});

//obtener conductores con id
routes.get('/conductores/:id',(req,res)=>{
    const {id} = req.params
    let sql = "select * from conductores where idConductor = ?";
    //select datospersonales.idDatos,nombre,apellido,edad,licencia,idTransRuta from conductores inner join datospersonales where datospersonales.idDatos = ? limit 1;
    //let sql = "select conductores.idConductor,nombre,apellido,edad,licencia,idTransRuta from conductores inner join datospersonales where datospersonales.idDatos = ? "
    conecta.query(sql,[id],(err, rows, fields)=>{
        if(!err) res.json(rows)
        else
            console.error(err)
    })
});

//-------------------------------------------------//
//agregar un registro
routes.post('/reg',(req,res)=>{
    const {idDatos, nombre, apellido, edad} = req.body
    let sql = `insert into datospersonales(idDatos,nombre, apellido, edad) values('${idDatos}','${nombre}','${apellido}','${edad}')`
    conecta.query(sql,(err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'usuario registrado'})
        }
    })
});

//Agregar un conductor
routes.post('/conduc/reg',(req,res)=>{
    const {idConductor,idDatos, idTransRuta, Licencia} = req.body
    let sql = `insert into conductores(idConductor, idDatos, idTransRuta, Licencia) values('${idConductor}','${idDatos}','${idTransRuta}','${Licencia}')`
    conecta.query(sql,(err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Conductor registrado'})
        }
    })
});

routes.post('/conduc/reg1',(req,res)=>{
    const {idConductor,nombre, apellido,edad, idTransRuta, Licencia} = req.body
    let sql = `insert into conductores(idConductor, nombre, apellido, edad, idTransRuta, Licencia) values('${idConductor}','${nombre}','${apellido}','${edad}','${idTransRuta}','${Licencia}')`
    conecta.query(sql,(err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Conductor registrado'})
        }
    })
});


//-------------------------------------------------//
//eliminar un registro
routes.delete('/del/:id',(req,res)=>{
    const {id} = req.params
    let sql = `delete from datospersonales where idDatos = '${id}'`
    conecta.query(sql,(err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Registro eliminado'})
        }
    })
});

//eliminar conductores
routes.delete('/delete/:id',(req,res)=>{
    const {id} = req.params
    let sql = `delete from conductores where idConductor = '${id}'`
    conecta.query(sql,(err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Registro eliminado'})
        }
    })
});

//-------------------------------------------------//
//modificar
routes.put('/edit/:id',(req,res)=>{
    const {id} = req.params
    const {nombre, apellido, edad} = req.body
    let sql = `update datospersonales set nombre = '${nombre}',apellido = '${apellido}',edad = '${edad}' where idDatos = '${id}'`
    conecta.query(sql,(err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Registro modificado'})
        }
    })
});

routes.put('/editconduc/:id',(req,res)=>{
    const {id} = req.params
    const {idDatos, idTransRuta, Licencia} = req.body
    let sql = `update conductores set idDatos = '${idDatos}', idTransRuta = '${idTransRuta}', Licencia = '${Licencia}' where idConductor = '${id}'`
    conecta.query(sql,(err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Conductor modificado'})
        }
    })
});

module.exports = routes;