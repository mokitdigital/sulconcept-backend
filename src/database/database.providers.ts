import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: 'j88ulsx6eatn.us-east-2.psdb.cloud',
        port: 3306,
        username: 'q9yitswga4mm',
        password: 'pscale_pw_fY4DwHqUhIBSLHBPsNzpaopZkWiA4t3qoqveHf7q0hY',
        database: 'sulconcept_vps',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
        ssl: true,
        extra: {
          ssl: {
            "rejectUnauthorized": false
          }
        },
      }),
  },
];

/* export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'lugano15',
        database: 'sulconcept_homologacao',
        // TODO ENTITIES
        synchronize: true,
      }),
  },
]; */
