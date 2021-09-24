import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ProdutoController } from './produto.controller';
import { produtoProviders } from './produto.providers';
import { ProdutoService } from './produto.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ProdutoController],
  providers: [
    ...produtoProviders,
    ProdutoService],
  exports: [ProdutoService]
})
export class ProdutoModule {}
