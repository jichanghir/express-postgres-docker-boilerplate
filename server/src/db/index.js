'use strict';

const fs        = require('fs');
const path      = require('path');
const Sequelize = require('sequelize');
const env       = process.env.NODE_ENV || 'development';
const config    = require(path.join(__dirname, 'config.js'))[env];
let db          = {};
const modelsFolderPath = './models';

const sequelize = new Sequelize(`postgres://${config.username}:${config.password}@db/${config.database}`, config);

fs
  .readdirSync(path.join(__dirname, modelsFolderPath))
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    let model = sequelize['import'](path.join(__dirname, modelsFolderPath, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = sequelize;

