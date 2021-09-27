import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ResultadoDto } from 'src/dto/resultado.dto'
import { CreateUsuarioDto } from './dto/create-usuario..dto'
import { Usuario } from './usuario.entity'
import { UsuarioService } from './usuario.service'


@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get('listar')
  async listar(): Promise<Usuario[]> {
    return this.usuarioService.findAll()
  }

  @Post('cadastrar')
  async cadastrar(@Body() data: CreateUsuarioDto): Promise<ResultadoDto> {
    
    return this.usuarioService.CreateUser(data)
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    return req.user;
  }
}