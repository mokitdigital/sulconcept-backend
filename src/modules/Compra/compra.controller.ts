import { Controller, Get, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { CreateCompraDto } from './dto/create-compra.dto';
import { CompraService } from './compra.service';

@Controller('compras')
export class CompraController {
  constructor(private compraService: CompraService) {}

  @Post()
  async create(@Body() createCompraDto: CreateCompraDto, @Res() res: Response): Promise<Response> {
    const resposta = (await this.compraService.create(createCompraDto))

    if(resposta.status) {
      return res.status(HttpStatus.CREATED).json({
        message: "Compra feita com sucesso"
      })
    } else {
      return res.status(HttpStatus.CREATED).json({
        message: `Não foi possível dar nota, ${resposta.mensagem}`
      })
    }
  }

  @Get()
  async findAll(@Res() res: Response): Promise<Response> {
    const resposta = (await this.compraService.findAll())

    if(resposta.status) {
      return res.status(HttpStatus.CREATED).json({
        message: "Lista de Compras recebida com sucesso!",
        produtos: resposta.resultado
      })
    } else {
      return res.status(HttpStatus.CREATED).json({
        message: `Não foi possível listar as compras, ${resposta.mensagem}`
      })
    }
  }
}