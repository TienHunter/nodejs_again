"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Episode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Episode.belongsTo(models.Film, {
        foreignKey: "filmID",
        targetKey: "id",
      });
    }
  }
  Episode.init(
    {
      filmID: DataTypes.INTEGER,
      link: DataTypes.STRING,
      title: DataTypes.STRING,
      episode: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Episode",
      paranoid: true,
    }
  );
  return Episode;
};
