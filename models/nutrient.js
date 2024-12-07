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
  },
  nutrientName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

nutrient.belongsToMany(products, { through: product_nutrient });

nutrient
  .sync()
  .then(() => {
    console.log("Table created succesfully");
  })
  .catch((error) => {
    console.error("unnable to creat table", +error);
  });

module.exports = nutrient;
