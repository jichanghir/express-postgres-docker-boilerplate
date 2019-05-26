'use strict';
module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    name: {
      type: DataTypes.STRING,
      unique: true
    },
  }, {});
  Team.associate = function(models) {
    Team.belongsToMany(models.User, {
      through: 'Member',
      foreignKey: 'teamId'
    });
    Team.belongsTo(models.User, {
      foreignKey: 'owner'
    })
  };
  return Team;
};
