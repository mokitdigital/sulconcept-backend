import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClothesModule } from './Clothes/clothes.module'
import { UsuarioModule } from './Usuario/usuario.module'
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ClothesModule,
    UsuarioModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
