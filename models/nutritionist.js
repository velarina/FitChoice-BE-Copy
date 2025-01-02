const { Sql, DataTypes } = require("sequelize");
const database = require("../config/database");
const products = require("./product");

const nutritionist = database.define("nutritionist", {
  nutritionistID: {
    type: DataTypes.UUID,
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  nutritionistName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nutritionistEmail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  specialization: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  certification: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  yearsOfExperience: {
    type: DataTypes.INTEGER,
    allowNull: false,
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

module.exports = nutritionist;
