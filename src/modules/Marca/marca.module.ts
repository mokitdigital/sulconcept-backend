import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { MarcaController } from './marca.controller';
import { marcaProviders } from './marca.providers';
import { MarcaService } from './marca.service';

@Module({
  imports: [DatabaseModule],
  controllers: [MarcaController],
  providers: [
    ...marcaProviders,
    MarcaService],
  exports: [MarcaService]
})
export class MarcaModule {}
