const { Sql, DataTypes } = require("sequelize");
const database = require("../config/database");
const member = require("./member");
const healthIssue = require("./healthIssue");

const member_healthissue = database.define("member_healthissues");

module.exports = member_healthissue;
