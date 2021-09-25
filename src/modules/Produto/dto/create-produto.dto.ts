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

  // Chaves estrangeiras
  idImagens?: number;

  idModelo?: number;

  idMarca?: number;
}
