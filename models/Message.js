module.exports = function(sequelize, DataTypes) {
  var Message = sequelize.define("Message", {
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    }
  });
  Message.associate = function(models) {
    Message.belongsTo(models.User, {
      foreignKey: "author_id",
      as: "Author"
    });
    Message.belongsTo(models.Topic, {
      foreignKey: "topic_id",
      as: "Topic"
    });
  };

  return Message;
};
