const Sequelize = require("sequelize");
const sequelize = require("../sequelize");

const message = sequelize.define(
  "message",
  {
    uuid: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    message: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  },
  {}
);

module.exports = message;
