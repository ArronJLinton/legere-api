module.exports = function(sequelize, DataTypes) {
  const Book = sequelize.define("Book", {
    // id AUTO_INCREMENT will be created for us and this will be the PRIMARY KEY
    title: DataTypes.STRING,
    coverPhoto: DataTypes.STRING
  })

  Book.associate = function(models){
    Book.belongsTo(models.Author, {
      // this will create a column called AuthorId
      foreignKey: {
        allowNull: false
      }
    })

    Book.hasMany(models.Note, {
      onDelete: "cascade"
    })
  }
  return Book;
};