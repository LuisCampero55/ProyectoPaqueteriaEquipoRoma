CREATE DATABASE paqueteria;

USE paqueteria;

CREATE TABLE `paqueteria`.`datospersonales` (
  `idDatos` INT NOT NULL,
  `Nombre` VARCHAR(45) NOT NULL,
  `Apellido` VARCHAR(45) NOT NULL,
  `Edad` INT NOT NULL,
  PRIMARY KEY (`idDatos`));


CREATE TABLE `paqueteria`.`conductores` (
  `idConductor` INT NOT NULL,
  `idDatos` INT NOT NULL,
  `idTransRuta` INT NOT NULL,
  `Licencia` INT NOT NULL,
  PRIMARY KEY (`idConductor`));


CREATE TABLE `paqueteria`.`transruta` (
  `idTransRuta` INT NOT NULL,
  `idTransporte` INT NOT NULL,
  `idRuta` INT NOT NULL,
  PRIMARY KEY (`idTransRuta`));


CREATE TABLE `paqueteria`.`transporte` (
  `idTransporte` INT NOT NULL,
  `Placas` VARCHAR(45) NOT NULL,
  `Tipo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idTransporte`));


CREATE TABLE `paqueteria`.`ruta` (
  `idRuta` INT NOT NULL,
  `Ruta` VARCHAR(45) NOT NULL,
  `idColCP` INT NOT NULL,
  PRIMARY KEY (`idRuta`));


CREATE TABLE `paqueteria`.`colcp` (
  `idColCP` INT NOT NULL,
  `idColonia` INT NOT NULL,
  `idCP` INT NOT NULL,
  PRIMARY KEY (`idColCP`));


CREATE TABLE `paqueteria`.`colonias` (
  `idColonias` INT NOT NULL,
  `Nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idColonias`));


CREATE TABLE `paqueteria`.`cp` (
  `idCP` INT NOT NULL,
  `Numero` INT NOT NULL,
  PRIMARY KEY (`idCP`));


CREATE TABLE `paqueteria`.`paqueteconductor` (
  `idPaqueteConductor` INT NOT NULL,
  `idPaqueteEmpresa` INT NOT NULL,
  `idConductor` INT NOT NULL,
  PRIMARY KEY (`idPaqueteConductor`));


CREATE TABLE `paqueteria`.`destino` (
  `idDestino` INT NOT NULL,
  `idPaqueteConductor` INT NOT NULL,
  PRIMARY KEY (`idDestino`));


CREATE TABLE `paqueteria`.`paquetes` (
  `idPaquetes` INT NOT NULL,
  `Peso` INT NOT NULL,
  `Dimension` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idPaquetes`));


CREATE TABLE `paqueteria`.`paqueteempresa` (
  `idPaqueteEmpresa` INT NOT NULL,
  `idPaquete` INT NOT NULL,
  `idEmpresa` INT NOT NULL,
  PRIMARY KEY (`idPaqueteEmpresa`));


CREATE TABLE `paqueteria`.`empresa` (
  `idEmpresa` INT NOT NULL,
  `Nombre` VARCHAR(45) NOT NULL,
  `Direccion` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idEmpresa`));


 ALTER TABLE `paqueteria`.`conductores` 
ADD INDEX `idDatos_idx` (`idDatos` ASC) VISIBLE,
ADD INDEX `FK_idTransRuta_idx` (`idTransRuta` ASC) VISIBLE;
;
ALTER TABLE `paqueteria`.`conductores` 
ADD CONSTRAINT `FK_idDatos`
  FOREIGN KEY (`idDatos`)
  REFERENCES `paqueteria`.`datospersonales` (`idDatos`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `FK_idTransRuta`
  FOREIGN KEY (`idTransRuta`)
  REFERENCES `paqueteria`.`transruta` (`idTransRuta`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;


ALTER TABLE `paqueteria`.`transruta` 
ADD INDEX `FK_idRuta_idx` (`idRuta` ASC) VISIBLE;
;
ALTER TABLE `paqueteria`.`transruta` 
ADD CONSTRAINT `FK_idTrasporte`
  FOREIGN KEY (`idTransRuta`)
  REFERENCES `paqueteria`.`transporte` (`idTransporte`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `FK_idRuta`
  FOREIGN KEY (`idRuta`)
  REFERENCES `paqueteria`.`ruta` (`idRuta`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;


ALTER TABLE `paqueteria`.`ruta` 
ADD INDEX `FK_idColCP_idx` (`idColCP` ASC) VISIBLE;
;
ALTER TABLE `paqueteria`.`ruta` 
ADD CONSTRAINT `FK_idColCP`
  FOREIGN KEY (`idColCP`)
  REFERENCES `paqueteria`.`colcp` (`idColCP`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;


ALTER TABLE `paqueteria`.`colcp` 
ADD INDEX `FK_idColonia_idx` (`idColonia` ASC) VISIBLE,
ADD INDEX `FK_idCP_idx` (`idCP` ASC) VISIBLE;
;
ALTER TABLE `paqueteria`.`colcp` 
ADD CONSTRAINT `FK_idColonia`
  FOREIGN KEY (`idColonia`)
  REFERENCES `paqueteria`.`colonias` (`idColonias`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `FK_idCP`
  FOREIGN KEY (`idCP`)
  REFERENCES `paqueteria`.`cp` (`idCP`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;


ALTER TABLE `paqueteria`.`paqueteconductor` 
ADD INDEX `FK_idConductor_idx` (`idConductor` ASC) VISIBLE,
ADD INDEX `FK_idPaqueteEmpresa_idx` (`idPaqueteEmpresa` ASC) VISIBLE;
;
ALTER TABLE `paqueteria`.`paqueteconductor` 
ADD CONSTRAINT `FK_idConductor`
  FOREIGN KEY (`idConductor`)
  REFERENCES `paqueteria`.`conductores` (`idConductor`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `FK_idPaqueteEmpresa`
  FOREIGN KEY (`idPaqueteEmpresa`)
  REFERENCES `paqueteria`.`paqueteempresa` (`idPaqueteEmpresa`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;


ALTER TABLE `paqueteria`.`destino` 
ADD INDEX `FK_PaqueteConductor_idx` (`idPaqueteConductor` ASC) VISIBLE;
;
ALTER TABLE `paqueteria`.`destino` 
ADD CONSTRAINT `FK_PaqueteConductor`
  FOREIGN KEY (`idPaqueteConductor`)
  REFERENCES `paqueteria`.`paqueteconductor` (`idPaqueteConductor`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;


ALTER TABLE `paqueteria`.`paqueteempresa` 
ADD INDEX `FK_idPaquete_idx` (`idPaquete` ASC) VISIBLE,
ADD INDEX `FK_idEmpresa_idx` (`idEmpresa` ASC) VISIBLE;
;
ALTER TABLE `paqueteria`.`paqueteempresa` 
ADD CONSTRAINT `FK_idPaquete`
  FOREIGN KEY (`idPaquete`)
  REFERENCES `paqueteria`.`paquetes` (`idPaquetes`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `FK_idEmpresa`
  FOREIGN KEY (`idEmpresa`)
  REFERENCES `paqueteria`.`empresa` (`idEmpresa`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

----------Registros-----------
---Colonias----
INSERT INTO `paqueteria`.`colonias` (`idColonias`, `Nombre`) VALUES ('1', 'Colonia Juarez');
INSERT INTO `paqueteria`.`colonias` (`idColonias`, `Nombre`) VALUES ('2', 'Colonia Roma');
INSERT INTO `paqueteria`.`colonias` (`idColonias`, `Nombre`) VALUES ('3', 'La raza');
INSERT INTO `paqueteria`.`colonias` (`idColonias`, `Nombre`) VALUES ('4', 'Lomas de los Cedros');
INSERT INTO `paqueteria`.`colonias` (`idColonias`, `Nombre`) VALUES ('5', 'Vista hermosa ');

---Datos personales----
INSERT INTO `paqueteria`.`datospersonales` (`idDatos`, `Nombre`, `Apellido`, `Edad`) VALUES ('1', 'Luis', 'Campero', '22');
INSERT INTO `paqueteria`.`datospersonales` (`idDatos`, `Nombre`, `Apellido`, `Edad`) VALUES ('2', 'Bryan', 'Campos', '21');
INSERT INTO `paqueteria`.`datospersonales` (`idDatos`, `Nombre`, `Apellido`, `Edad`) VALUES ('3', 'Pablo', 'Ruiz', '33');
INSERT INTO `paqueteria`.`datospersonales` (`idDatos`, `Nombre`, `Apellido`, `Edad`) VALUES ('4', 'Axel', 'Roman', '12');
INSERT INTO `paqueteria`.`datospersonales` (`idDatos`, `Nombre`, `Apellido`, `Edad`) VALUES ('5', 'Giovanni', 'Hernandez', '23');

---Codigo postal----
INSERT INTO `paqueteria`.`cp` (`idCP`, `Numero`) VALUES ('1', '09010');
INSERT INTO `paqueteria`.`cp` (`idCP`, `Numero`) VALUES ('2', '09005');
INSERT INTO `paqueteria`.`cp` (`idCP`, `Numero`) VALUES ('3', '09003');
INSERT INTO `paqueteria`.`cp` (`idCP`, `Numero`) VALUES ('4', '09012');
INSERT INTO `paqueteria`.`cp` (`idCP`, `Numero`) VALUES ('5', '09004');

---Empresa----
INSERT INTO `paqueteria`.`empresa` (`idEmpresa`, `Nombre`, `Direccion`) VALUES ('1', 'SSC Maquis', 'Alvararo Obregon, La martinica');
INSERT INTO `paqueteria`.`empresa` (`idEmpresa`, `Nombre`, `Direccion`) VALUES ('2', 'Lutipones', 'Gustavo A. Madero, Vista Hermosa');
INSERT INTO `paqueteria`.`empresa` (`idEmpresa`, `Nombre`, `Direccion`) VALUES ('3', 'Quesad Hilla ', 'Tlalpan, Santa Ursula Xitla');
INSERT INTO `paqueteria`.`empresa` (`idEmpresa`, `Nombre`, `Direccion`) VALUES ('4', 'SusanTractor ', 'Coyoacan, Santa Cecilia ');
INSERT INTO `paqueteria`.`empresa` (`idEmpresa`, `Nombre`, `Direccion`) VALUES ('5', 'Mojilern', 'Coyoacan, Santa Catarina ');

---Paquetes----
INSERT INTO `paqueteria`.`paquetes` (`idPaquetes`, `Peso`, `Dimension`) VALUES ('1', '3', 'Grande');
INSERT INTO `paqueteria`.`paquetes` (`idPaquetes`, `Peso`, `Dimension`) VALUES ('2', '2', 'Mediano');
INSERT INTO `paqueteria`.`paquetes` (`idPaquetes`, `Peso`, `Dimension`) VALUES ('3', '1', 'Chico');
INSERT INTO `paqueteria`.`paquetes` (`idPaquetes`, `Peso`, `Dimension`) VALUES ('4', '6', 'Grande');
INSERT INTO `paqueteria`.`paquetes` (`idPaquetes`, `Peso`, `Dimension`) VALUES ('5', '3', 'Mediano');

---Transporte----
INSERT INTO `paqueteria`.`transporte` (`idTransporte`, `Placas`, `Tipo`) VALUES ('1', 'ABC-123', 'Carro');
INSERT INTO `paqueteria`.`transporte` (`idTransporte`, `Placas`, `Tipo`) VALUES ('2', 'ABC-456', 'Moto');
INSERT INTO `paqueteria`.`transporte` (`idTransporte`, `Placas`, `Tipo`) VALUES ('3', 'CDE-123', 'Camioneta');
INSERT INTO `paqueteria`.`transporte` (`idTransporte`, `Placas`, `Tipo`) VALUES ('4', 'CDE-456', 'Camion');
INSERT INTO `paqueteria`.`transporte` (`idTransporte`, `Placas`, `Tipo`) VALUES ('5', 'FGH-123', 'Moto');

---Colonia y CP----
INSERT INTO `paqueteria`.`colcp` (`idColCP`, `idColonia`, `idCP`) VALUES ('1', '1', '1');
INSERT INTO `paqueteria`.`colcp` (`idColCP`, `idColonia`, `idCP`) VALUES ('2', '2', '4');
INSERT INTO `paqueteria`.`colcp` (`idColCP`, `idColonia`, `idCP`) VALUES ('3', '3', '2');
INSERT INTO `paqueteria`.`colcp` (`idColCP`, `idColonia`, `idCP`) VALUES ('4', '5', '3');
INSERT INTO `paqueteria`.`colcp` (`idColCP`, `idColonia`, `idCP`) VALUES ('5', '4', '5');

---PaqueteEmpresa----
INSERT INTO `paqueteria`.`paqueteempresa` (`idPaqueteEmpresa`, `idPaquete`, `idEmpresa`) VALUES ('1', '1', '5');
INSERT INTO `paqueteria`.`paqueteempresa` (`idPaqueteEmpresa`, `idPaquete`, `idEmpresa`) VALUES ('2', '2', '5');
INSERT INTO `paqueteria`.`paqueteempresa` (`idPaqueteEmpresa`, `idPaquete`, `idEmpresa`) VALUES ('3', '3', '4');
INSERT INTO `paqueteria`.`paqueteempresa` (`idPaqueteEmpresa`, `idPaquete`, `idEmpresa`) VALUES ('4', '4', '2');
INSERT INTO `paqueteria`.`paqueteempresa` (`idPaqueteEmpresa`, `idPaquete`, `idEmpresa`) VALUES ('5', '5', '1');

---Ruta----
INSERT INTO `paqueteria`.`ruta` (`idRuta`, `Ruta`, `idColCP`) VALUES ('1', 'Primera ', '1');
INSERT INTO `paqueteria`.`ruta` (`idRuta`, `Ruta`, `idColCP`) VALUES ('2', 'Segunda', '2');
INSERT INTO `paqueteria`.`ruta` (`idRuta`, `Ruta`, `idColCP`) VALUES ('3', 'Tercera', '3');
INSERT INTO `paqueteria`.`ruta` (`idRuta`, `Ruta`, `idColCP`) VALUES ('4', 'Cuarta ', '4');
INSERT INTO `paqueteria`.`ruta` (`idRuta`, `Ruta`, `idColCP`) VALUES ('5', 'Quinta', '5');

---Transruta----
INSERT INTO `paqueteria`.`transruta` (`idTransRuta`, `idTransporte`, `idRuta`) VALUES ('1', '1', '1');
INSERT INTO `paqueteria`.`transruta` (`idTransRuta`, `idTransporte`, `idRuta`) VALUES ('2', '1', '2');
INSERT INTO `paqueteria`.`transruta` (`idTransRuta`, `idTransporte`, `idRuta`) VALUES ('3', '2', '3');
INSERT INTO `paqueteria`.`transruta` (`idTransRuta`, `idTransporte`, `idRuta`) VALUES ('4', '3', '4');
INSERT INTO `paqueteria`.`transruta` (`idTransRuta`, `idTransporte`, `idRuta`) VALUES ('5', '4', '5');

---Conductor---
INSERT INTO `paqueteria`.`conductores` (`idConductor`, `idDatos`, `idTransRuta`, `Licencia`) VALUES ('1', '1', '1', '000100');
INSERT INTO `paqueteria`.`conductores` (`idConductor`, `idDatos`, `idTransRuta`, `Licencia`) VALUES ('2', '2', '2', '000200');
INSERT INTO `paqueteria`.`conductores` (`idConductor`, `idDatos`, `idTransRuta`, `Licencia`) VALUES ('3', '3', '3', '000300');
INSERT INTO `paqueteria`.`conductores` (`idConductor`, `idDatos`, `idTransRuta`, `Licencia`) VALUES ('4', '3', '4', '000400');
INSERT INTO `paqueteria`.`conductores` (`idConductor`, `idDatos`, `idTransRuta`, `Licencia`) VALUES ('5', '4', '5', '000500');

---Paquete conductor----
INSERT INTO `paqueteria`.`paqueteconductor` (`idPaqueteConductor`, `idPaqueteEmpresa`, `idConductor`) VALUES ('1', '1', '1');
INSERT INTO `paqueteria`.`paqueteconductor` (`idPaqueteConductor`, `idPaqueteEmpresa`, `idConductor`) VALUES ('2', '2', '1');
INSERT INTO `paqueteria`.`paqueteconductor` (`idPaqueteConductor`, `idPaqueteEmpresa`, `idConductor`) VALUES ('3', '3', '2');
INSERT INTO `paqueteria`.`paqueteconductor` (`idPaqueteConductor`, `idPaqueteEmpresa`, `idConductor`) VALUES ('4', '4', '3');
INSERT INTO `paqueteria`.`paqueteconductor` (`idPaqueteConductor`, `idPaqueteEmpresa`, `idConductor`) VALUES ('5', '5', '4');

---Destino----
INSERT INTO `paqueteria`.`destino` (`idDestino`, `idPaqueteConductor`) VALUES ('1', '1');
INSERT INTO `paqueteria`.`destino` (`idDestino`, `idPaqueteConductor`) VALUES ('2', '2');
INSERT INTO `paqueteria`.`destino` (`idDestino`, `idPaqueteConductor`) VALUES ('3', '3');
INSERT INTO `paqueteria`.`destino` (`idDestino`, `idPaqueteConductor`) VALUES ('4', '4');
INSERT INTO `paqueteria`.`destino` (`idDestino`, `idPaqueteConductor`) VALUES ('5', '5');





