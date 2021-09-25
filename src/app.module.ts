import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProdutoModule } from './modules/Produto/produto.module'
import { UsuarioModule } from './modules/Usuario/usuario.module'
import { AuthModule } from './auth/auth.module';
import { NotasModule } from './modules/Notas/notas.module';
import { ModeloModule } from './modules/Modelo/modelo.module';
import { MarcaModule } from './modules/Marca/marca.module';
import { ImagensModule } from './modules/Imagens/imagens.module';
import { CompraModule } from './modules/Compra/compra.module';

@Module({
  imports: [
    CompraModule,
    ImagensModule,
    MarcaModule,
    ModeloModule,
    NotasModule,
    ProdutoModule,
    UsuarioModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
