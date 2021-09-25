import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { NotasController } from './notas.controller';
import { notasProviders } from './notas.providers';
import { NotasService } from './notas.service';

@Module({
  imports: [DatabaseModule],
  controllers: [NotasController],
  providers: [
    ...notasProviders,
    NotasService],
  exports: [NotasService]
})
export class NotasModule {}
