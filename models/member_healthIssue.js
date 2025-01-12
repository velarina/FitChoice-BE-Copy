const { Sql, DataTypes } = require("sequelize");
const database = require("../config/database");
const member_healthissue = database.define(
  "member_healthissue",
  {
    memberMemberID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "members",
        key: "memberID",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    healthIssueHealthIssueID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "healthIssues",
        key: "healthIssueID",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
  },
  {
    tableName: "member_healthissue",
    timestamps: false,
    indexes: [
      {
        unique: true,
        fields: ["memberMemberID", "healthIssueHealthIssueID"],
      },
    ],
  }
);

module.exports = member_healthissue;
