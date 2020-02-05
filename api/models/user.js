const Sequelize = require("sequelize");
const sequelize = require("../sequelize");

const user = sequelize.define(
  "user",
  {
    uuid: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    nom: {
      type: Sequelize.STRING,
      allowNull: true
    },

    prenom: {
      type: Sequelize.STRING,
      allowNull: true
    },

    adresseMail: {
      type: Sequelize.STRING,
      allowNull: true
    },
    telephone: {
      type: Sequelize.INTEGER,
      allowNull: true
    }
  },
  {}
);

module.exports = user;
