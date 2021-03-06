import { Controller, Get, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { CreateImagensDto } from './dto/create-imagens.dto';
import { ImagensService } from './imagens.service';

@Controller('imagens')
export class ImagensController {
  constructor(private imagensService: ImagensService) {}

  @Post()
  async create(@Body() createImagensDto: CreateImagensDto, @Res() res: Response): Promise<Response> {
    const resposta = (await this.imagensService.create(createImagensDto))

    if(resposta.status) {
      return res.status(HttpStatus.CREATED).json({
        message: "Imagens feita com sucesso"
      })
    } else {
      return res.status(HttpStatus.CREATED).json({
        message: `Não foi possível dar nota, ${resposta.mensagem}`
      })
    }
  }

  @Get()
  async findAll(@Res() res: Response): Promise<Response> {
    const resposta = await this.imagensService.findAll()

    if (resposta.status) {
      return res.status(HttpStatus.OK).json({
        message: "Lista de imagens recebida com sucesso!",
        response: resposta
      })
    } else {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: "Erro ao listar as imagens",
        response: resposta
      })
    }
  }
}