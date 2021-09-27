CREATE TABLE `imagens` (
  `idCompra` int NOT NULL AUTO_INCREMENT,
  `numero` int NOT NULL,
  `valor` double NOT NULL,
  `metodo_pagamento` varchar(45) NOT NULL,
  `endereco` varchar(255) NOT NULL,
  `cidade` varchar(45) NOT NULL,
  `estado` varchar(45) NOT NULL,
  `cep` varchar(9) NOT NULL,
  `valor_frete` double NOT NULL,
  `url_nota_fiscal` varchar(1000) NOT NULL,
  PRIMARY KEY (`idImagens`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
