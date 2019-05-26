'use strict';

module.exports = (sequelize, DataTypes) => {
  let Gig = sequelize.define('gig', {
    title: {
      type: DataTypes.STRING
    },
    technologies: {
      type: DataTypes.STRING
    },
    budget: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    }
  });

  return Gig;
}
