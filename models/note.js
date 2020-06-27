module.exports = function(sequelize, DataTypes) {
  const Note = sequelize.define("Note", {
    // id AUTO_INCREMENT will be created for us and this will be the PRIMARY KEY
    note: DataTypes.STRING,
  })

  Note.associate = function(models){
    Note.belongsTo(models.Chapter, {
      // this will create a column called AuthorId
      foreignKey: {
        allowNull: false
      }
    })
  }
  return Note;
};