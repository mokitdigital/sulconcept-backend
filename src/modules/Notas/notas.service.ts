import { Inject, Injectable } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { Repository } from 'typeorm';
import { CreateNotasDto } from './dto/create-notas.dto';
import { Notas } from './notas.entity';

@Injectable()
export class NotasService {
  constructor(
    @Inject('NOTAS_REPOSITORY')
    private notasRepository: Repository<Notas>,
  ) { }

  async create(data: CreateNotasDto) {
    const notas = new Notas()

    notas.descricao = data.descricao
    notas.valor = data.valor

    try {
      const result = await this
        .notasRepository.save(notas);
      console.log("Notas salvo com sucesso! ", result);
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
}
