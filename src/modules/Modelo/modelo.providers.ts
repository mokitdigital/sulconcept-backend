import { Connection } from 'typeorm';
import { Modelo } from './modelo.entity';

export const modeloProviders = [
  {
    provide: 'MODELO_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Modelo),
    inject: ['DATABASE_CONNECTION'],
  },
];