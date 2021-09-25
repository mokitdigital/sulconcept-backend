import { Connection } from 'typeorm';
import { Notas } from './notas.entity';

export const notasProviders = [
  {
    provide: 'NOTAS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Notas),
    inject: ['DATABASE_CONNECTION'],
  },
];