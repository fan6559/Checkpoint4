const express = require("express");
const sequelize = require("sequelize");
const router = express.Router();
const event = require("../models/event");

router.get("/", (req, res) => {
  event
    .findAll()
    .then(event => res.status(200).json(event))
    .catch(err => res.status(400).json(err));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  event
    .findOne({
      where: {
        uuid: id
      }
    })
    .then(event => res.status(200).json(event))
    .catch(err => res.status(400).json(err));
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  event
    .update()
    .then(event => {
      res.status(200).json(event);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/", (req, res) => {
  const { prix, date, ville } = req.body;
  event
    .create({
      prix: prix,
      date: date,
      ville: ville
    })
    .then(event => res.status(201).json(event))
    .catch(err => res.status(400).json(err));
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  event
    .destroy({
      where: {
        uuid: id
      }
    })
    .then(event => {
      res.status(200).json(event);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
