import { Connection } from 'typeorm';
import { Compra } from './compra.entity';

export const compraProviders = [
  {
    provide: 'COMPRA_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Compra),
    inject: ['DATABASE_CONNECTION'],
  },
];