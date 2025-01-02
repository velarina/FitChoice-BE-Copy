const { DataTypes } = require("sequelize");
const database = require("../config/database");
const products = require("./product");
const product_ingredient = require("./product_ingredient");

const ingredient = database.define("ingredient", {
  ingredientID: {
    type: DataTypes.UUID,
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  ingredientName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = ingredient;
