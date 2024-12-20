const { Sql, DataTypes } = require("sequelize");
const database = require("../config/database");
const products = require("./product");

const favorites = database.define("favorites", {
  favoriteID: {
    type: DataTypes.UUID,
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
  },
  favoriteName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  memberID: {
    type: DataTypes.UUID,
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    references: {
      model: "member",
      key: "memberID",
    },
  },
  productsID: {
    type: DataTypes.UUID,
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    references: {
      model: "products",
      key: "productsID",
    },
  },
});

module.exports = favorites;
