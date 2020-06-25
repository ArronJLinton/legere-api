module.exports = function(sequelize, DataTypes) {
  const Author = sequelize.define("Author", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

  Author.associate = function(models) {
    Author.hasMany(models.Book, {
      onDelete: "cascade"
    });
  };
  return Author;
}