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
    dialect: "postgres",
    storage: ":memory:"
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: 'db',
    dialect: 'postgres',
    use_env_variable: `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@db/${process.env.DB_NAME}`
  }
};
