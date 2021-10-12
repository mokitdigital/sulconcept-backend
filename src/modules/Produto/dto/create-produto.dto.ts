export class CreateProdutoDto {
  codigo: number;
  nome: string;
  valor: number;
  cor: string;
  tamanho: string;
  informacoes: string;
  genero: string;
  indicado_para: string;
  composicao: string;
  estoque: number;
  imagem_primary: string;
  imagem2: string;
  imagem3: string;
  imagem4: string;

  idModelo?: number;

  idMarca?: number;
}
