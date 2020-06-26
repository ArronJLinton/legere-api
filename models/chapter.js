module.exports = function(sequelize, DataTypes) {
  const Chapter = sequelize.define("Chapter", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
  })

  Chapter.associate = function(models) {
    Chapter.hasMany(models.Note, {
      onDelete: "cascade"
    });
    Chapter.belongsTo(models.Book, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Chapter;
}