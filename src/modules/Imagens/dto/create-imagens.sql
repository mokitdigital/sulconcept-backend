CREATE TABLE `imagens` (
  `idImagens` int NOT NULL AUTO_INCREMENT,
  `imagem_principal` varchar(255) NOT NULL,
  `imagem_dois` varchar(255) NOT NULL,
  `imagem_tres` varchar(255) NOT NULL,
  `imagem_quatro` varchar(255) NOT NULL,
  PRIMARY KEY (`idImagens`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
