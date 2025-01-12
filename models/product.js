const { Sql, DataTypes } = require("sequelize");
const database = require("../config/database");
const nutrient = require("./nutrient");
const nutritionist = require("./nutritionist");
const admin = require("./admin");
const category = require("./category");
const product_ingredient = require("./product_ingredient");
const product_nutrient = require("./product_nutrient");

const products = database.define("products", {
  productsID: {
    type: DataTypes.UUID,
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  productsImage: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  productsName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  productsBrand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  comments: {
    type: DataTypes.STRING,
  },
  approval: {
    type: DataTypes.ENUM("Waiting", "Declined", "High", "Medium", "Low"),
    allowNull: false,
  },
  categories: {
    type: DataTypes.STRING,
  },
  ingredients: {
    type: DataTypes.TEXT,
  },
  nutrients: {
    type: DataTypes.TEXT,
  },
  nutritionistID: {
    type: DataTypes.STRING,
  },
  adminID: {
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

module.exports = products;
