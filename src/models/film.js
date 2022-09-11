'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Film extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Film.belongsTo(models.Category,{foreignKey:'categoryID', targetKey:'categoryID'})
      Film.belongsTo(models.Allcode,{foreignKey:'timeID', targetKey:'keyMap'})

    }
  }
  Film.init({
    filmName: DataTypes.STRING,
    description: DataTypes.TEXT,
    categoryID: DataTypes.STRING,
    image: DataTypes.STRING,
    timeID:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Film',
    paranoid: true,
  });
  return Film;
};