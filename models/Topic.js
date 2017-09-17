module.exports = function(sequelize, DataTypes) {
  var Topic = sequelize.define("Topic", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  });
  Topic.associate = function(models) {
    Topic.belongsTo(models.User, {
      foreignKey: "created_by",
      as: "Creator"
    });
    Topic.hasMany(models.Message, {
      foreignKey: "topic_id",
      as: "Topic"
    });
  };

  return Topic;
};
