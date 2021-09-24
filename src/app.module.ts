import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutoModule } from './Produto/produto.module'
import { UsuarioModule } from './Usuario/usuario.module'
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ProdutoModule,
    UsuarioModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
