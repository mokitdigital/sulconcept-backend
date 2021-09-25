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
}