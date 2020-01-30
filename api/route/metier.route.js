const express = require("express");
const sequelize = require("sequelize");
const router = express.Router();
const metier = require("../models/metier");

router.get("/", (req, res) => {
  metier
    .findAll()
    .then(metier => res.status(200).json(metier))
    .catch(err => res.status(400).json(err));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  metier
    .findOne({
      where: {
        uuid: id
      }
    })
    .then(metier => res.status(200).json(metier))
    .catch(err => res.status(400).json(err));
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  metier
    .update()
    .then(metier => {
      res.status(200).json(metier);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/", (req, res) => {
  const { label } = req.body;
  metier
    .create({
      label: label
    })
    .then(metier => res.status(201).json(metier))
    .catch(err => res.status(400).json(err));
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  metier
    .destroy({
      where: {
        uuid: id
      }
    })
    .then(metier => {
      res.status(200).json(metier);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
