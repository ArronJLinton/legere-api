module.exports = function(sequelize, DataTypes) {
  const Author = sequelize.define("Author", {
    // id AUTO_INCREMENT will be created for us and this will be the PRIMARY KEY
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  })

  Author.associate = function(models) {
    // Associating Author with Books
    // When an Author is deleted, also delete any associated Books
    Author.hasMany(models.Book, {
      // when we delete an Author, this will delete all books associated to this Author Id
      onDelete: "cascade"
    });
  };
  return Author;
}