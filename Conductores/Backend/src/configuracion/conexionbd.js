const mysql = require('mysql');
const conecta = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'12345',
    port:'3306',
    database:'paqueteria'

})
conecta.connect();
module.exports = conecta
