import { Inject, Injectable } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { Repository } from 'typeorm';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { Marca } from './marca.entity';

@Injectable()
export class MarcaService {
  constructor(
    @Inject('MARCA_REPOSITORY')
    private marcaRepository: Repository<Marca>,
  ) { }

  async create(data: CreateMarcaDto) {
    const marca = new Marca()

    marca.descricao = data.descricao
    marca.nome = data.nome
    marca.imagem = data.imagem

    try {
      const result = await this
        .marcaRepository.save(marca);
      console.log("Marca salvo com sucesso! ", result);
      return <ResultadoDto>{
        status: true,
        mensagem: "Marca salvo com sucesso!"
      };
    } catch (error) {
      console.log("Erro ao registrar o usuário!", error);
      return <ResultadoDto>{
        status: false,
        mensagem: error
      };
    }
  }
}
