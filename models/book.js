module.exports = function(sequelize, DataTypes) {
  const Book = sequelize.define("Book", {
    title: {
      type: DataTypes.STRING,
      unique: true
    },
    bookCover: {
      type: DataTypes.BLOB('long'),
      get() {
        return this.getDataValue('bookCover').toString('utf8');
      },
    }
  })

  Book.associate = function(models){
    Book.belongsTo(models.Author, {
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