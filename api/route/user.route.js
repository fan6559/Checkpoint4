const express = require("express");
const sequelize = require("sequelize");
const router = express.Router();
const user = require("../models/user");

router.get("/", (req, res) => {
  user
    .findAll()
    .then(user => res.status(200).json(user))
    .catch(err => res.status(400).json(err));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  user
    .findOne({
      where: {
        uuid: id
      }
    })
    .then(user => res.status(200).json(user))
    .catch(err => res.status(400).json(err));
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  user
    .update()
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/", (req, res) => {
  const { nom, prenom, adresseMail, telephone } = req.body;
  user
    .create({
      nom: nom,
      prenom: prenom,
      adresseMail: adresseMail,
      telephone: telephone
    })
    .then(user => res.status(201).json(user))
    .catch(err => res.status(400).json(err));
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  user
    .destroy({
      where: {
        uuid: id
      }
    })
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
