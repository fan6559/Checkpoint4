const Sequelize = require("sequelize");
const sequelize = require("../sequelize");

const event = sequelize.define(
  "event",
  {
    uuid: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    prix: {
      type: Sequelize.STRING,
      allowNull: true
    },

    date: {
        type: Sequelize.DATE,
        allowNull: true
      },

    ville: {
        type: Sequelize.STRING,
        allowNull: true
      },

  },
  {}
);

module.exports = event;