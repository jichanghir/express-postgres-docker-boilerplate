'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
    }
  }, {});
  User.associate = function(models) {
    User.belongsToMany(models.Team, {
      through: 'Member',
      foreignKey: 'userId'
    })
  };
  return User;
};
