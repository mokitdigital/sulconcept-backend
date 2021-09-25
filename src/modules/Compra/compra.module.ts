import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CompraController } from './compra.controller';
import { compraProviders } from './compra.providers';
import { CompraService } from './compra.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CompraController],
  providers: [
    ...compraProviders,
    CompraService],
  exports: [CompraService]
})
export class CompraModule {}
