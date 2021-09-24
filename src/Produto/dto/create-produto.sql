CREATE TABLE `produto` (
  `idProduto` int NOT NULL AUTO_INCREMENT,
  `codigo` int NOT NULL,
  `nome` varchar(100) NOT NULL,
  `valor` int NOT NULL,
  `cor` varchar(3) NOT NULL,
  `tamanho` varchar(3) NOT NULL,
  `informacoes` varchar(500) NOT NULL,
  `genero` varchar(20) NOT NULL,
  `indicado_para` varchar(255) NOT NULL,
  `composicao` varchar(255) NOT NULL,
  `estoque` int NOT NULL,
  `idModelo` int,
  `idNota` int,
  `idImagens` int,
  `idMarca` int,
  PRIMARY KEY (`idProduto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
