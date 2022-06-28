drop database if exists proy3;
create database if not exists proy3;
use proy3;

CREATE TABLE `Datos_personales` (
  `idUsuario` INT NOT NULL auto_increment,
  `nombre_empresa` VARCHAR(45) NOT NULL,
  `cp` VARCHAR(45) NOT NULL,
  `Correo` VARCHAR(45) NOT NULL,
  `Contraseña` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idUsuario`));


SELECT * FROM `Datos_personales`;

INSERT INTO `Datos_personales` (`idUsuario`, `nombre_empresa`, `cp`, `Correo`, `Contraseña`) VALUES (0, 'Walmart', '55300', 'walmart@live.com', '4 cilindros');
INSERT INTO `Datos_personales` (`idUsuario`, `nombre_empresa`, `cp`, `Correo`, `Contraseña`) VALUES (1, 'Soriana', '33600', 'soriana@live.com', '6 cilindros');
INSERT INTO `Datos_personales` (`idUsuario`, `nombre_empresa`, `cp`, `Correo`, `Contraseña`) VALUES (2, 'Bodega Aurrera', '15588', 'bodega@live.com', '4 cilindros');
INSERT INTO `Datos_personales` (`idUsuario`, `nombre_empresa`, `cp`, `Correo`, `Contraseña`) VALUES (3, 'Express', '630200', 'express@live.com', '4 cilindros');
INSERT INTO `Datos_personales` (`idUsuario`, `nombre_empresa`, `cp`, `Correo`, `Contraseña`) VALUES (4, 'Waldos', '45000', 'Waldos@live.com', '4 cilindros');
insert into Datos_personales( nombre_empresa, cp, Correo, Contraseña) VALUES ('${nombre_empresa}', '${cp}', '${Correo}', '${Contraseña}');

INSERT INTO `Datos_personales` (`nombre_empresa`, `cp`, `Correo`, `Contraseña`) VALUES ('Walmart 2', '55300', 'walmart@live.com', '4 cilindros');

DELETE from Datos_personales where idUsuario = 22;










