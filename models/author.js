module.exports = function(sequelize, DataTypes) {
  const Author = sequelize.define("Author", {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false
    },
  })

  Author.associate = function(models) {
    Author.hasMany(models.Book, {
      onDelete: "cascade"
    });
  };
  return Author;
}