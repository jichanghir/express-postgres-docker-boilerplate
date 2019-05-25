const Sequelize = require('sequelize');

const db = new Sequelize(`postgres://${process.env.DB_USER}:${process.env.DB_PASS}@db/codegig`);

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
