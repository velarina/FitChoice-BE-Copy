const { Sql, DataTypes } = require("sequelize");
const database = require("../config/database");
const product_nutrient = require("./product_nutrient");
const products = require("./product");

const nutrient = database.define("nutrient", {
  nutrientID: {
    type: DataTypes.UUID,
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  nutrientName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = nutrient;
