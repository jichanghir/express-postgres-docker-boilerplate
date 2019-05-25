const Sequelize = require('sequelize');

const sequelize = new Sequelize(`postgres://${process.env.DB_USER}:${process.env.DB_PASS}@db/codegig`)
