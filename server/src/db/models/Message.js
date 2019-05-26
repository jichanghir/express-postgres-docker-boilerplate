'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    text: DataTypes.TEXT
  }, {});
  Message.associate = function(models) {
    Message.belongsTo(models.User, {
      foreignKey: 'user_id'
    });
    Message.belongsTo(models.Channel, {
      foreignKey: 'channel_id'
    })
  };
  return Message;
};
