module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: 'db',
    dialect: 'postgres',
    use_env_variable: `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@db/${process.env.DB_NAME}`
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: 'db',
    dialect: 'postgres',
    use_env_variable: `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@db/${process.env.DB_NAME}`
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: 'db',
    dialect: 'postgres',
    use_env_variable: `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@db/${process.env.DB_NAME}`
  },
  "migrations-path": path.join(__dirname, 'migrations'),
  "models-path": path.join(__dirname, 'models'),
};
