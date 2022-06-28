create database paqueteria;
use paqueteria;

create table conductores(
id_conduc int not null auto_increment,
nombre varchar (25),
apellido varchar (25),
edad int,
nacionalidad varchar (30),
licencia int,
primary key (id_conduc)
);

select * from conductores;

insert into conductores(nombre) values ("Luis");

/*Obtener registros completos
select * from conductores;*/

/*Obtener registros por id
select * from conductores where id_conduc = ?;*/

/*Dar de alta un conductor
insert into conductores(nombre,apellido,edad,nacionalidad,licencia) 
									values('${nombre}','${apellido}','${edad}','${nacionalidad}','${licencia}')*/

/*Eliminar conductor
delete from conductores where id_conduc = '${id}'*/

/*Editar un conductor
update conductores set 
                nombre = '${nombre}',
                apellido = '${apellido}',
                edad = '${edad}',
                nacionalidad = '${nacionalidad}',
                licencia = '${licencia}'
                where id_conduc = '${id}'*/







