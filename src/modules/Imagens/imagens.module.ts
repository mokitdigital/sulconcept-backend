import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ImagensController } from './imagens.controller';
import { imagensProviders } from './imagens.providers';
import { ImagensService } from './imagens.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ImagensController],
  providers: [
    ...imagensProviders,
    ImagensService],
  exports: [ImagensService]
})
export class ImagensModule {}
