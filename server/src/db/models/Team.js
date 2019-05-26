'use strict';
module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    name: {
      type: DataTypes.STRING,
      unique: true
    },
  }, {});
  Team.associate = function(models) {
    User.belongsToMany(models.User, {
      through: 'Member',
      foreignKey: 'teamId'
    });
    User.belongsTo(models.User, {
      foreignKey: 'owner'
    })
  };
  return Team;
};
