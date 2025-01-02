const { Sql, DataTypes } = require("sequelize");
const database = require("../config/database");

const admin = database.define("admin", {
  adminID: {
    type: DataTypes.UUID,
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  adminName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  adminEmail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  permission: {
    type: DataTypes.ENUM("adminProduct", "adminRegistrations"),
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

module.exports = admin;
