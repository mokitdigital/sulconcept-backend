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

  async create(data: CreateProdutoDto) {
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
    produto.imagem_primary = data.imagem_primary
    produto.imagem2 = data.imagem2
    produto.imagem3 = data.imagem3
    produto.imagem4 = data.imagem4

    // Chaves estrangeiras
    /* produto.idImagens = data.idImagens

    produto.idModelo = data.idModelo

    produto.idMarca = data.idMarca */

    try {
      const result = await this
        .produtoRepository.save(produto);
      console.log("Produto salvo com sucesso! ", result);
      return <ResultadoDto>{
        status: true,
        mensagem: "Usuário salvo com sucesso!"
      };
    } catch (error) {
      console.log("Erro ao registrar o usuário!", error);
      return <ResultadoDto>{
        status: false,
        mensagem: error
      };
    }
  }

  async findAll() {
    try {
      const result = await this
      .produtoRepository.find()

      return <ResultadoDto>{
        status: true,
        mensagem: "Lista de produto pesquisado com sucesso!",
        resultado: result
      }

    } catch(error) {
      console.log("Erro ao listar os produtos!", error)
      return <ResultadoDto>{
        status: false,
        mensagem: error
      }
    }
  }

}
