drop database if exists proy3;
create database if not exists proy3;
use proy3;

CREATE TABLE `Datos_personales` (
  `idUsuario` INT NOT NULL,
  `nombre_empresa` VARCHAR(45) NOT NULL,
  `cp` VARCHAR(45) NOT NULL,
  `Correo` VARCHAR(45) NOT NULL,
  `Contraseña` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idUsuario`));


SELECT * FROM idUsuario;

INSERT INTO `idUsuario` (`idUsuario`, `nombre_empresa`, `cp`, `Correo`, `Contraseña`) VALUES ('U00', 'Walmart', '55300', 'walmart@live.com', '4 cilindros');
INSERT INTO `idUsuario` (`idUsuario`, `nombre_empresa`, `cp`, `Correo`, `Contraseña`) VALUES ('U01', 'Soriana', '33600', 'soriana@live.com', '6 cilindros');
INSERT INTO `idUsuario` (`idUsuario`, `nombre_empresa`, `cp`, `Correo`, `Contraseña`) VALUES ('T00', 'Bodega Aurrera', '15588', 'bodega@live.com', '4 cilindros');
INSERT INTO `idUsuario` (`idUsuario`, `nombre_empresa`, `cp`, `Correo`, `Contraseña`) VALUES ('T01', 'Express', '630200', 'express@live.com', '4 cilindros');
INSERT INTO `idUsuario` (`idUsuario`, `nombre_empresa`, `cp`, `Correo`, `Contraseña`) VALUES ('T03', 'Waldos', '45000', 'Waldos@live.com', '4 cilindros');




