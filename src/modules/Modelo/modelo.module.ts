import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ModeloController } from './modelo.controller';
import { modeloProviders } from './modelo.providers';
import { ModeloService } from './modelo.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ModeloController],
  providers: [
    ...modeloProviders,
    ModeloService],
  exports: [ModeloService]
})
export class ModeloModule {}
