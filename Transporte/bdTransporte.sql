CREATE DATABASE paqueteria;

USE paqueteria;

CREATE TABLE `paqueteria`.`transporte` (
  `idTransporte` INT NOT NULL,
  `Placas` VARCHAR(45) NOT NULL,
  `Tipo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idTransporte`));

INSERT INTO `paqueteria`.`transporte` (`idTransporte`, `Placas`, `Tipo`) VALUES ('1', 'ABC-123', 'Carro');
INSERT INTO `paqueteria`.`transporte` (`idTransporte`, `Placas`, `Tipo`) VALUES ('2', 'ABC-456', 'Moto');
INSERT INTO `paqueteria`.`transporte` (`idTransporte`, `Placas`, `Tipo`) VALUES ('3', 'CDE-123', 'Camioneta');
INSERT INTO `paqueteria`.`transporte` (`idTransporte`, `Placas`, `Tipo`) VALUES ('4', 'CDE-456', 'Camion');
INSERT INTO `paqueteria`.`transporte` (`idTransporte`, `Placas`, `Tipo`) VALUES ('5', 'FGH-123', 'Moto');
