import { Inject, Injectable } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { Repository } from 'typeorm';
import { CreateModeloDto } from './dto/create-modelo.dto';
import { Modelo } from './modelo.entity';

@Injectable()
export class ModeloService {
  constructor(
    @Inject('MODELO_REPOSITORY')
    private modeloRepository: Repository<Modelo>,
  ) { }

  async create(data: CreateModeloDto) {
    const modelo = new Modelo()

    modelo.descricao = data.descricao
    modelo.nome = data.nome

    try {
      const result = await this
        .modeloRepository.save(modelo);
      console.log("Modelo salvo com sucesso! ", result);
      return <ResultadoDto>{
        status: true,
        mensagem: "Modelo salvo com sucesso!"
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
      .modeloRepository.find()

      return <ResultadoDto>{
        status: true,
        mensagem: "Lista de modelos pesquisado com sucesso!",
        resultado: result
      }

    } catch(error) {
      console.log("Erro ao listar as modelos!", error)
      return <ResultadoDto>{
        status: false,
        mensagem: error
      }
    }
  }
}
