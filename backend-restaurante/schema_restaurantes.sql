
-- -----------------------------------------------------
-- Table `restaurante`.`platos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `restaurante`.`platos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `precio` DOUBLE NOT NULL,
  `imagen` VARCHAR(256) NOT NULL DEFAULT 'https://via.placeholder.com/300/000000/FFFFFF/?text=plato',
  `activo` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `restaurante`.`roles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `restaurante`.`roles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `restaurante`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `restaurante`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(50) NOT NULL,
  `nombre` VARCHAR(120) NOT NULL,
  `correo` VARCHAR(100) NOT NULL,
  `telefono` VARCHAR(45) NOT NULL,
  `direccion` VARCHAR(150) NOT NULL,
  `contrasena` VARCHAR(45) NOT NULL,
  `activo` TINYINT(1) NOT NULL DEFAULT '1',
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `rol_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_usuarios_roles_idx` (`rol_id` ASC) ,
  CONSTRAINT `fk_usuarios_roles`
    FOREIGN KEY (`rol_id`)
    REFERENCES `restaurante`.`roles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



-- -----------------------------------------------------
-- Table `restaurante`.`estados_orden`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `restaurante`.`estados_orden` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `restaurante`.`pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `restaurante`.`pedidos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `precio_total` DOUBLE NOT NULL,
  `forma_pago` ENUM('DATAFONO', 'EFECTIVO') NULL,
  `usuario_id` INT NOT NULL,
  `estado_orden_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_pedidos_usuarios_idx` (`usuario_id` ASC) ,
  INDEX `fk_pedidos_estados_orden1_idx` (`estado_orden_id` ASC) ,
  CONSTRAINT `fk_pedidos_usuarios`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `restaurante`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedidos_estados_orden1`
    FOREIGN KEY (`estado_orden_id`)
    REFERENCES `restaurante`.`estados_orden` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;



-- -----------------------------------------------------
-- Table `restaurante`.`pedidos_has_platos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `restaurante`.`pedidos_has_platos` (
  `pedido_id` INT NOT NULL,
  `plato_id` INT NOT NULL,
  `cantidad` INT NULL,
  PRIMARY KEY (`pedido_id`, `plato_id`),
  INDEX `fk_pedidos_has_platos_platos1_idx` (`plato_id` ASC) ,
  INDEX `fk_pedidos_has_platos_pedidos1_idx` (`pedido_id` ASC) ,
  CONSTRAINT `fk_pedidos_has_platos_pedidos1`
    FOREIGN KEY (`pedido_id`)
    REFERENCES `restaurante`.`pedidos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedidos_has_platos_platos1`
    FOREIGN KEY (`plato_id`)
    REFERENCES `restaurante`.`platos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

--seeds
INSERT INTO `restaurante`.`roles` (`nombre`) VALUES ('admin');
INSERT INTO `restaurante`.`roles` (`nombre`) VALUES ('user');


INSERT INTO `restaurante`.`usuarios` (`username`, `nombre`, `correo`, `telefono`, `direccion`, `contrasena`, `rol_id`) VALUES ('danyjavierb', 'dany bautista', 'danyjavierb@gmail.com', '+573134986746', 'calle123', 'password123', '1');
INSERT INTO `restaurante`.`usuarios` (`username`, `nombre`, `correo`, `telefono`, `direccion`, `contrasena`, `rol_id`) VALUES ('carlos1', 'carlos miranda', 'carlos@carlos.com', '+573112345678', 'call 900', 'pass2020', '2');

INSERT INTO `restaurante`.`platos` (`nombre`, `precio`) VALUES ('hamburguesa sencilla', '20000');
INSERT INTO `restaurante`.`platos` (`nombre`, `precio`) VALUES ('papas francesas', '10000');
INSERT INTO `restaurante`.`platos` (`nombre`, `precio`) VALUES ('perro caliente', '15000');
INSERT INTO `restaurante`.`platos` (`nombre`, `precio`) VALUES ('helado chocolate', '5000');


INSERT INTO `restaurante`.`estados_orden` (`nombre`) VALUES ('nuevo');
INSERT INTO `restaurante`.`estados_orden` (`nombre`) VALUES ('confirmado');
INSERT INTO `restaurante`.`estados_orden` (`nombre`) VALUES ('preparando');
INSERT INTO `restaurante`.`estados_orden` (`nombre`) VALUES ('enviando');
INSERT INTO `restaurante`.`estados_orden` (`nombre`) VALUES ('cancelado');
INSERT INTO `restaurante`.`estados_orden` (`nombre`) VALUES ('entregado');


