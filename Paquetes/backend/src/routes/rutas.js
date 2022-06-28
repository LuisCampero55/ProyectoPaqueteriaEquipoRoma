const routes = require('express').Router();

const conecta = require('../configuracion/conexionBD');

routes.get('/reg',(req,res)=>{
    res.send('ruta vehiculos');
})

/*Lista de todos los Vehiculos*/

routes.get('/lista',(req,res)=>{
    let sql='select *from vehiculos;';
    conecta.query(sql,(err,rows, fields)=>{
if(!err)res.json(rows)
else
    conside.error(err)
        })
})

/*buscar por ID*/
routes.get('/:id',(req,res)=>{
    const{id} = req.params
    let sql=`select * from vehiculos where idvehiculos = '${id}'`
    conecta.query(sql,(err,rows, fields)=>{
if(!err)res.json(rows)
else
    conside.error(err)
        })
})

/* Agregar un nuevo vehiculo*/
routes.post('/agregar',(req,res)=>{
    const {idvehiculos, Placas, Color, Modelo, Cilindraje} = req.body
    let sql = `insert into vehiculos(idvehiculos, Placas, Color, Modelo, Cilindraje) values('${idvehiculos}','${Placas}','${Color}','${Modelo}','${Cilindraje}')`
    conecta.query(sql,(err, rows, fields)=>{
        if(!err) res.json(rows)
        else {
            res.json({status:'Vehiculo registrado'})
        }
    })
});

/* Eliminar un vehiculo*/
routes.delete('/:id',(req, res)=>{
    const{id} = req.params
    let sql =`delete from vehiculos where idvehiculos = '${id}'`
    conecta.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Vehiculo eliminado'})
        }
    })
});

/* Modificar un vehiculo*/
routes.put('/:id',(req, res)=>{
    const{id}=req.params
    const {idvehiculos,Placas, Color, Modelo, Cilindraje} = req.body

    let sql = `update vehiculos set 
                Placas='${Placas}',
                Color='${Color}',
                Modelo='${Modelo}',
                Cilindraje= '${Cilindraje}'
                where idvehiculos = '${id}'`
    conecta.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Vehiculo modificado'})
        }
    })

})

module.exports = routes;