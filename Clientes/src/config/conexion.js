const mysql = require ('mysql');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123321',
    port: 3306,
    database: 'proy3'
});


module.exports = conexion ;