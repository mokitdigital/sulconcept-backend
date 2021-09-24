import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { ProdutoService } from './produto.service';

@Controller('produtos')
export class ProdutoController {
  constructor(private produtoService: ProdutoService) {}

  @Post()
  async create(@Body() createProdutoDto: CreateProdutoDto) {
    this.produtoService.create(createProdutoDto);
  }
}
