const path = require('path');
require('dotenv').config({
    path: path.join(__dirname, '../../../.env')
});

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: 'localhost',
    dialect: 'postgres',
    use_env_variable: `DB_URL` // for cli only
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: 'localhost',
    dialect: 'postgres',
    use_env_variable: `DB_URL` // for cli only
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: 'localhost',
    dialect: 'postgres',
    use_env_variable: `DB_URL` // for cli only
  }
};
