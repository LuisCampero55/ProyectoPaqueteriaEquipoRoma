const routes = require('express').Router();
const conecta = require('../configuracion/conexionBD');

routes.get('/reg',(req,res)=>{
    res.send('ruta login');
})

//Mostrar lista de rutas
routes.get('/consulta/1',(req,res)=>{
    //let sql= "SELECT * FROM ruta INNER JOIN transruta on ruta.idruta = transruta.idtransruta INNER JOIN transporte on transruta.idtransruta = transporte.idtransporte";
    let sql= "SELECT * FROM ruta";
    conecta.query(sql,(err,rows, fields)=>{
    if(!err)res.json(rows)
        else
            console.error(err)
        })
})

routes.get('/consulta/2',(req,res)=>{
    let sql= "SELECT * FROM ruta INNER JOIN colcp on ruta.idcolcp = colcp.idcolcp INNER JOIN colonias on colcp.idcolonia = colonias.idcolonias INNER JOIN cp on colcp.idcp = cp.idcp";
    conecta.query(sql,(err,rows, fields)=>{
    if(!err)res.json(rows)
        else
            console.error(err)
        })
})


//Mostrar ruta por ID
routes.get('/consulta/3/:id',(req,res)=>{
    const{id} = req.params
    let sql= `select * from ruta where idruta = '${id}'`
    conecta.query(sql,(err,rows, fields)=>{
    if(!err)res.json(rows)
        else
            console.error(err)
        })
})

routes.get('/consulta/4',(req,res)=>{
    let sql= "SELECT * FROM colonias";
    conecta.query(sql,(err,rows, fields)=>{
    if(!err)res.json(rows)
        else
            console.error(err)
        })
})

routes.get('/consulta/5',(req,res)=>{
    let sql= "SELECT * FROM cp";
    conecta.query(sql,(err,rows, fields)=>{
    if(!err)res.json(rows)
        else
            console.error(err)
        })
})

routes.get('/consulta/6',(req,res)=>{
    let sql= "SELECT * FROM ruta INNER JOIN transruta on ruta.idruta = transruta.idtransruta INNER JOIN transporte on transruta.idtransruta = transporte.idtransporte";
    conecta.query(sql,(err,rows, fields)=>{
    if(!err)res.json(rows)
        else
            console.error(err)
        })
})

//Mostrar colonia por ID
routes.get('/consulta/7/:id',(req,res)=>{
    const{id} = req.params
    let sql= `select * from colonias where idcolonias = '${id}'`
    conecta.query(sql,(err,rows, fields)=>{
    if(!err)res.json(rows)
        else
            console.error(err)
        })
})

//Mostrar cp por ID
routes.get('/consulta/8/:id',(req,res)=>{
    const{id} = req.params
    let sql= `select * from cp where idcp = '${id}'`
    conecta.query(sql,(err,rows, fields)=>{
    if(!err)res.json(rows)
        else
            console.error(err)
        })
})

//Eliminar un registro por ID
routes.delete('/delete/ruta/:id',(req,res)=>{
    const{id} = req.params
    let sql= `delete from ruta where idRuta = '${id}'`
    conecta.query(sql,(err,rows, fields)=>{
    if(!err)res.json(rows)
        else
            console.error(err)
        })
})

/*routes.delete('/delete/transruta/:id',(req,res)=>{
    const{id} = req.params
    let sql= `delete from transruta where idtransruta = '${id}'`
    conecta.query(sql,(err,rows, fields)=>{
    if(!err)res.json(rows)
        else
            console.error(err)
        })
})*/

routes.delete('/delete/colcp/:id',(req,res)=>{
    const{id} = req.params
    let sql= `delete from colcp where idColCP = '${id}'`
    conecta.query(sql,(err,rows, fields)=>{
    if(!err)res.json(rows)
        else
            console.error(err)
        })
})

routes.delete('/delete/colonias/:id',(req,res)=>{
    const{id} = req.params
    let sql= `delete from colonias where idColonias = '${id}'`
    conecta.query(sql,(err,rows, fields)=>{
    if(!err)res.json(rows)
        else
            console.error(err)
        })
})

routes.delete('/delete/cp/:id',(req,res)=>{
    const{id} = req.params
    let sql= `delete from cp where idCP = '${id}'`
    conecta.query(sql,(err,rows, fields)=>{
    if(!err)res.json(rows)
        else
            console.error(err)
        })
})



//Insertar un registro
routes.post('/insert/ruta',(req,res)=>{
    const{idRuta,Ruta,idColCP} = req.body
    let sql= `insert into ruta (idRuta, Ruta, idColCP) value ('${idRuta}','${Ruta}','${idColCP}')`
    conecta.query(sql,(err,rows, fields)=>{
    if(!err)res.json(rows)
        else
            res.json({status: 'Ruta Agregada'})
            console.error(err)
        })
})

routes.post('/insert/colcp',(req,res)=>{
    const{idColCP,idCol,idCP} = req.body
    let sql= `insert into colcp (idColCP, idColonia, idCP) value ('${idColCP}','${idColonia}','${idCP}')`
    conecta.query(sql,(err,rows, fields)=>{
    if(!err)res.json(rows)
        else
            res.json({status: 'ColCP Agregada'})
            console.error(err)
        })
})

routes.post('/insert/colonias',(req,res)=>{
    const{idColonias,Nombre} = req.body
    let sql= `insert into colonias (idColonias, Nombre) value ('${idColonias}','${Nombre}')`
    conecta.query(sql,(err,rows, fields)=>{
    if(!err)res.json(rows)
        else
            res.json({status: 'Colonia Agregada'})
            console.error(err)
        })
})

routes.post('/insert/cp',(req,res)=>{
    const{idCP,Numero} = req.body
    let sql= `insert into cp (idCP, Numero) value ('${idCP}','${Numero}')`
    conecta.query(sql,(err,rows, fields)=>{
    if(!err)res.json(rows)
        else
            res.json({status: 'CP Agregada'})
            console.error(err)
        })
})

//Modificar un registro
routes.put('/put/ruta/:id',(req,res)=>{
    const{id} = req.params
    const{idRuta,Ruta,idColCP} = req.body
    let sql= `update ruta set
                Ruta = '${Ruta}',
                idColCP = '${idColCP}'
                where idRuta = '${idRuta}'`
    conecta.query(sql,(err,rows, fields)=>{
    if(!err)res.json(rows)
        else
            res.json({status: 'Ruta Modificada'})
            console.error(err)
        })
})

routes.put('/put/colcp/:id',(req,res)=>{
    const{id} = req.params
    const{idColCP,idCol,idCP} = req.body
    let sql= `update colcp set
                idColonia = '${idColonia}',
                idCP = '${idCP}'
                where idColCP = '${idColCP}'`
    conecta.query(sql,(err,rows, fields)=>{
    if(!err)res.json(rows)
        else
            res.json({status: 'ColCP Modificada'})
            console.error(err)
        })
})

routes.put('/put/colonias/:id',(req,res)=>{
    const{id} = req.params
    const{idColonias,Nombre} = req.body
    let sql= `update colonias set
                Nombre = '${Nombre}'
                where idColonias = '${idColonias}'`
    conecta.query(sql,(err,rows, fields)=>{
    if(!err)res.json(rows)
        else
            res.json({status: 'Colonia Modificada'})
            console.error(err)
        })
})

routes.put('/put/cp/:id',(req,res)=>{
    const{id} = req.params
    const{idCP,Numero} = req.body
    let sql= `update cp set
                Numero = '${Numero}'
                where idCP = '${idCP}'`
    conecta.query(sql,(err,rows, fields)=>{
    if(!err)res.json(rows)
        else
            res.json({status: 'CP Modificado'})
            console.error(err)
        })
})

module.exports = routes;