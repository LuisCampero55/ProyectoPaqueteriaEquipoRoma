const mysqle=require("mysql");
const conecta = mysqle.createConnection({
    host:"localhost",
    user:"root",
    password:"123456",
    port:3306,
    database:"paqueteria"
})
conecta.connect()
module.exports=conecta