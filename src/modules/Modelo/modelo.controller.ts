import { Controller, Get, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { CreateModeloDto } from './dto/create-modelo.dto';
import { ModeloService } from './modelo.service';

@Controller('modelos')
export class ModeloController {
  constructor(private modeloService: ModeloService) {}

  @Post()
  async create(@Body() createModeloDto: CreateModeloDto, @Res() res: Response): Promise<Response> {
    const resposta = (await this.modeloService.create(createModeloDto))

    if(resposta.status) {
      return res.status(HttpStatus.CREATED).json({
        message: "Modelo feita com sucesso"
      })
    } else {
      return res.status(HttpStatus.CREATED).json({
        message: `Não foi possível dar nota, ${resposta.mensagem}`
      })
    }
  }
}