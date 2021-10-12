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

  @Get()
  async findAll(@Res() res: Response): Promise<Response> {
    const resposta = await this.modeloService.findAll()

    if (resposta.status) {
      return res.status(HttpStatus.OK).json({
        message: "Lista de modelos recebida com sucesso!",
        response: resposta
      })
    } else {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: "Erro ao listar as modelos",
        response: resposta
      })
    }
  }
}