import { Controller, Get, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { CreateNotasDto } from './dto/create-notas.dto';
import { NotasService } from './notas.service';

@Controller('notas')
export class NotasController {
  constructor(private notasService: NotasService) {}

  @Post()
  async create(@Body() createNotasDto: CreateNotasDto, @Res() res: Response): Promise<Response> {
    const resposta = (await this.notasService.create(createNotasDto))

    if(resposta.status) {
      return res.status(HttpStatus.CREATED).json({
        message: "Nota feita com sucesso"
      })
    } else {
      return res.status(HttpStatus.CREATED).json({
        message: `Não foi possível dar nota, ${resposta.mensagem}`
      })
    }
  }
}