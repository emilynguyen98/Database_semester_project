CREATE SCHEMA `librarySystem` ;

CREATE TABLE `librarySystem`.`users` (
  `password` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `userID` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`userID`),
  UNIQUE INDEX `userID_UNIQUE` (`userID` ASC) VISIBLE);
  
  
  CREATE TABLE `librarySystem`.`books` (
  `userID` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `author` VARCHAR(45) NOT NULL,
  `ISBN` INT NULL,
  `bookNo` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`bookNo`));

