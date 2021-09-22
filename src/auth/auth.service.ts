import { Injectable } from '@nestjs/common';
import { UsuarioService } from 'src/Usuario/usuario.service';
import { compare } from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(private usuarioService: UsuarioService) {}

  async validateUsuario(email: string, password: string): Promise<any> {
    const usuario = await this.usuarioService.findOne(email);

    if(usuario && await compare(password, usuario.password)) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = usuario;

      return result
    }

    return null
  }
}
