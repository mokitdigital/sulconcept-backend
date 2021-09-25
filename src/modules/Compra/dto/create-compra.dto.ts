export interface CreateCompraDto {
  numero: number;
  valor: number;
  metodo_pagamento: string;
  endereco: string;
  cidade: string;
  estado: string;
  cep: string;
  valor_frete: number;
  url_nota_fiscal: string;
}