import { Inject, Injectable } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { Repository } from 'typeorm';
import { CreateCompraDto } from './dto/create-compra.dto';
import { Compra } from './compra.entity';

@Injectable()
export class CompraService {
  constructor(
    @Inject('COMPRA_REPOSITORY')
    private compraRepository: Repository<Compra>,
  ) { }

  async create(data: CreateCompraDto) {
    const compra = new Compra()

    compra.numero = data.numero
    compra.valor = data.valor
    compra.cidade = data.cidade
    compra.endereco = data.endereco
    compra.metodo_pagamento = data.metodo_pagamento
    compra.valor_frete = data.valor_frete
    compra.url_nota_fiscal = data.url_nota_fiscal
    compra.estado = data.estado
    compra.cep = data.cep

    try {
      const result = await this
        .compraRepository.save(compra);
      console.log("Compra salvo com sucesso! ", result);
      return <ResultadoDto>{
        status: true,
        mensagem: "Compra salvo com sucesso!"
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
      .compraRepository.find()

      return <ResultadoDto>{
        status: true,
        mensagem: "Lista de compras pesquisado com sucesso!",
        resultado: result
      }

    } catch(error) {
      console.log("Erro ao listar as compras!", error)
      return <ResultadoDto>{
        status: false,
        mensagem: error
      }
    }
  }
}
