const mysqle=require("mysql");
const conecta = mysqle.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    port:3306,
    database:"paqueteria"
})
conecta.connect()
module.exports=conecta