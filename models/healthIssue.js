const { Sql, DataTypes } = require("sequelize");
const database = require("../config/database");
const member = require("./member");
const member_healthissue = require("./member_healthIssue");

const healthIssue = database.define("healthIssue", {
  healthIssueID: {
    type: DataTypes.UUID,
    allowNull: false,
    autoIncrement: false,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  healthIssueName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  healthIssueDesc: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  prohibition: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  nutritionistID: {
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

module.exports = healthIssue;
