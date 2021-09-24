import { Inject, Injectable } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { Repository } from 'typeorm';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { Produto } from './produto.entity';

@Injectable()
export class ProdutoService {
  constructor(
    @Inject('PRODUTO_REPOSITORY')
    private produtoRepository: Repository<Produto>,
  ) { }

  create(data: CreateProdutoDto) {
    const produto = new Produto()

    produto.codigo = data.codigo
    produto.nome = data.nome
    produto.valor = data.valor
    produto.cor = data.cor
    produto.tamanho = data.tamanho
    produto.informacoes = data.informacoes;
    produto.genero = data.genero;
    produto.indicado_para = data.indicado_para;
    produto.composicao = data.composicao;
    produto.estoque = data.estoque;

    // Chaves estrangeiras
    /* produto.idImagens = data.idImagens

    produto.idModelo = data.idModelo

    produto.idMarca = data.idMarca */

    return this
      .produtoRepository.save(produto)

      .then(result => {
        console.log("Produto salvo com sucesso! ", result)
        return <ResultadoDto>{
          status: true,
          mensagem: "Usuário salvo com sucesso!"
        }
      })

      .catch(error => {
        console.log("Erro ao registrar o usuário!", error)
        return <ResultadoDto>{
          status: false,
          mensagem: "Usuário não foi salvo..."
        }
      })
  }

}
