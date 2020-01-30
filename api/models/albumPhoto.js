const Sequelize = require("sequelize");
const sequelize = require("../sequelize");

const albumPhoto = sequelize.define(
  "albumPhoto",
  {
    uuid: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    photo: {
      type: Sequelize.STRING,
      allowNull: false
    },

  },
  {}
);

module.exports = albumPhoto;