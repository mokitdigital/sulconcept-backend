import { Controller, Get, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { ProdutoService } from './produto.service';

@Controller('produtos')
export class ProdutoController {
  constructor(private produtoService: ProdutoService) {}

  @Post()
  async create(@Body() createProdutoDto: CreateProdutoDto, @Res() res: Response): Promise<Response> {
    const resposta = (await this.produtoService.create(createProdutoDto))

    if(resposta.status) {
      return res.status(HttpStatus.CREATED).json({
        message: "Usuário criado com sucesso"
      })
    } else {
      return res.status(HttpStatus.CREATED).json({
        message: `Não foi possível criado o usuário, ${resposta.mensagem}`
      })
    }
  }

  @Get()
  async findAll(@Res() res: Response): Promise<Response> {
    const resposta = (await this.produtoService.findAll())

    if(resposta.status) {
      return res.status(HttpStatus.CREATED).json({
        message: "Lista de Produtos recebida com sucesso!",
        produtos: resposta.resultado
      })
    } else {
      return res.status(HttpStatus.CREATED).json({
        message: `Não foi possível criado o usuário, ${resposta.mensagem}`
      })
    }
  }
}
