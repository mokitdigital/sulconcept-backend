import { Connection } from 'typeorm';
import { Imagens } from './imagens.entity';

export const imagensProviders = [
  {
    provide: 'IMAGENS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Imagens),
    inject: ['DATABASE_CONNECTION'],
  },
];