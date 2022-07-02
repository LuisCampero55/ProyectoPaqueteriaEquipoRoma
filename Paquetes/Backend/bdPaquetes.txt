CREATE SCHEMA `paquetes` ;

CREATE TABLE `paquetes`.`paquetes` (
  `idPaquete` INT NOT NULL,
  `Peso` INT NOT NULL,
  `Dimension` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idPaquete`));


INSERT INTO `paquetes`.`paquetes` (`idPaquete`, `Peso`, `Dimension`) VALUES ('1', '3', '12x12');
INSERT INTO `paquetes`.`paquetes` (`idPaquete`, `Peso`, `Dimension`) VALUES ('2', '2', '15x10');
INSERT INTO `paquetes`.`paquetes` (`idPaquete`, `Peso`, `Dimension`) VALUES ('3', '1', '10x35');
INSERT INTO `paquetes`.`paquetes` (`idPaquete`, `Peso`, `Dimension`) VALUES ('4', '3', '12x25');
INSERT INTO `paquetes`.`paquetes` (`idPaquete`, `Peso`, `Dimension`) VALUES ('5', '2', '40x12');

/*Lista de todos los Paquetes*/

	select *from paquetes;

/*buscar por ID*/

	select * from paquetes where idPaquete = '${id}'
 

/* Agregar un nuevo Paquete*/

	insert into paquetes(idPaquete, Peso, Dimension) values('${idPaquete}','${Peso}','${Dimension}')
  
/* Eliminar un Paquete*/

	delete from paquetes where idPaquete = '${id}'

/* Modificar un Paquete*/

	update vehiculos set Peso='${Peso}',Dimension='${Dimension}',where idvehiculos = '${id}'`

