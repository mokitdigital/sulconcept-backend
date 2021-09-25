import { Connection } from 'typeorm';
import { Marca } from './marca.entity';

export const marcaProviders = [
  {
    provide: 'MARCA_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Marca),
    inject: ['DATABASE_CONNECTION'],
  },
];