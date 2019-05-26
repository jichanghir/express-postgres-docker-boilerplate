'use strict';
module.exports = (sequelize, DataTypes) => {
  const Channel = sequelize.define('Channel', {
    name: {
      type: DataTypes.STRING,
    },
    public: DataTypes.BOOLEAN
  }, {});
  Channel.associate = function(models) {
    Channel.belongsTo(models.Team, {
      foreignKey: 'team_id'
    })
  };
  return Channel;
};
