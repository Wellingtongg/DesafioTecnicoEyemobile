const knexConfiguration = {
  client: 'mysql',
  connection: {
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'desafio_tecnico_backend',
  },
  migrations: {
    directory: './src/database/migrations',
    tableName: 'migrations',
  },
};

export default knexConfiguration;
