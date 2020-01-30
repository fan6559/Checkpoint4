const Sequelize = require("sequelize");
const sequelize = require("../sequelize");

const celebrite = sequelize.define("celebrite", {
  uuid: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
  },
  nom: {
    type: Sequelize.STRING,
    allowNull: false
  },

  biographie: {
    type: Sequelize.TEXT,
    allowNull: false
  },

  image: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

module.exports = celebrite;
