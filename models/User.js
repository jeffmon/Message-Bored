module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  });
  User.associate = function(models) {
    User.hasMany(models.Topic, {
      foreignKey: "created_by",
      as: "Topics"
    });
    User.hasMany(models.Message, {
      foreignKey: "author_id",
      as: "Author"
    });
  };

  return User;
};
