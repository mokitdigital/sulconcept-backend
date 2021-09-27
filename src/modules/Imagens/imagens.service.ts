import { Inject, Injectable } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { Repository } from 'typeorm';
import { CreateImagensDto } from './dto/create-imagens.dto';
import { Imagens } from './imagens.entity';

@Injectable()
export class ImagensService {
  constructor(
    @Inject('IMAGENS_REPOSITORY')
    private imagensRepository: Repository<Imagens>,
  ) { }

  async create(data: CreateImagensDto) {
    const imagens = new Imagens()

    imagens.imagem_principal = data.imagem_principal
    imagens.imagem_dois = data.imagem_dois
    imagens.imagem_tres = data.imagem_tres
    imagens.imagem_quatro = data.imagem_quatro

    try {
      const result = await this
        .imagensRepository.save(imagens);
      console.log("Imagens salvo com sucesso! ", result);
      return <ResultadoDto>{
        status: true,
        mensagem: "Imagens salvo com sucesso!"
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
      .imagensRepository.find()

      return <ResultadoDto>{
        status: true,
        mensagem: "Lista de imagens pesquisado com sucesso!",
        resultado: result
      }

    } catch(error) {
      console.log("Erro ao listar as imagens!", error)
      return <ResultadoDto>{
        status: false,
        mensagem: error
      }
    }
  }
}
