import { Controller, Get, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { MarcaService } from './marca.service';

@Controller('marcas')
export class MarcaController {
  constructor(private marcaService: MarcaService) {}

  @Post()
  async create(@Body() createMarcaDto: CreateMarcaDto, @Res() res: Response): Promise<Response> {
    const resposta = (await this.marcaService.create(createMarcaDto))

    if(resposta.status) {
      return res.status(HttpStatus.CREATED).json({
        message: "Marca feita com sucesso"
      })
    } else {
      return res.status(HttpStatus.CREATED).json({
        message: `Não foi possível dar nota, ${resposta.mensagem}`
      })
    }
  }

  @Get()
  async findAll(@Res() res: Response): Promise<Response> {
    const resposta = await this.marcaService.findAll()

    if (resposta.status) {
      return res.status(HttpStatus.OK).json({
        message: "Lista de marca recebida com sucesso!",
        response: resposta
      })
    } else {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: "Erro ao listar as marca",
        response: resposta
      })
    }
  }
}