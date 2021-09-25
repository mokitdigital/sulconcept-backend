import { Injectable, Inject } from '@nestjs/common';
import { ResultadoDto } from 'src/dto/resultado.dto';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario..dto';
import { Usuario } from './usuario.entity';
import { genSalt, hash } from 'bcrypt'

@Injectable()
export class UsuarioService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<Usuario>,
  ) { }

  async findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  async findOne(email: string): Promise<Usuario | undefined> {
    return this.usuarioRepository.findOne({ email })
  }

  async CreateUser(data: CreateUsuarioDto): Promise<ResultadoDto> {
    const usuario = new Usuario()

    const salt = await genSalt(10);

    usuario.email = data.email
    usuario.nome = data.nome
    usuario.password = await hash(data.password, salt)
    usuario.telefone = data.telefone
    usuario.cpf = data.cpf

    return this
      .usuarioRepository.save(usuario)

      .then(result => {
        console.log("Usuário foi salvo! ", result)
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
