const Sequelize = require("sequelize");
const sequelize = require("../sequelize");

const metier = sequelize.define(
  "metier",
  {
    uuid: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    label: {
        type: Sequelize.STRING,
        allowNull: false
      },


  },
  {}
);

module.exports = metier;