CREATE SCHEMA `autos` ;

CREATE TABLE `autos`.`vehiculos` (
  `idvehiculos` INT NOT NULL,
  `Placas` VARCHAR(45) NOT NULL,
  `Color` VARCHAR(45) NOT NULL,
  `Modelo` VARCHAR(45) NOT NULL,
  `Cilindraje` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idvehiculos`));


SELECT * FROM autos.vehiculos;

INSERT INTO `autos`.`vehiculos` (`idvehiculos`, `Placas`, `Color`, `Modelo`, `Cilindraje`) VALUES ('1', 'VEHC1', 'blanco', '2010', '4 cilindros');
INSERT INTO `autos`.`vehiculos` (`idvehiculos`, `Placas`, `Color`, `Modelo`, `Cilindraje`) VALUES ('2', 'VEHC2', 'blanco', '2011', '6 cilindros');
INSERT INTO `autos`.`vehiculos` (`idvehiculos`, `Placas`, `Color`, `Modelo`, `Cilindraje`) VALUES ('3', 'VEHC3', 'negro', '2011', '4 cilindros');
INSERT INTO `autos`.`vehiculos` (`idvehiculos`, `Placas`, `Color`, `Modelo`, `Cilindraje`) VALUES ('4', 'VEHC4', 'negro', '2010', '4 cilindros');
INSERT INTO `autos`.`vehiculos` (`idvehiculos`, `Placas`, `Color`, `Modelo`, `Cilindraje`) VALUES ('5', 'VEHC5', 'negro', '2010', '4 cilindros');


/*Lista de todos los Vehiculos*/

    select *from vehiculos;

/*buscar por ID*/

   select * from vehiculos where idvehiculos = '${id}'

/* Agregar un nuevo vehiculo*/

    insert into vehiculos(idvehiculos, Placas, Color, Modelo, Cilindraje) values('${idvehiculos}','${Placas}','${Color}','${Modelo}','${Cilindraje}')

/* Eliminar un vehiculo*/

	delete from vehiculos where idvehiculos = '${id}'

/* Modificar un vehiculo*/

	update vehiculos set Placas='${Placas}', Color='${Color}', Modelo='${Modelo}',Cilindraje= '${Cilindraje}' where idvehiculos = '${id}'
