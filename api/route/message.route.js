const express = require("express");
const sequelize = require("sequelize");
const router = express.Router();
const message = require("../models/message");

router.get("/", (req, res) => {
  message
    .findAll()
    .then(message => res.status(200).json(message))
    .catch(err => res.status(400).json(err));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  message
    .findOne({
      where: {
        uuid: id
      }
    })
    .then(message => res.status(200).json(message))
    .catch(err => res.status(400).json(err));
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  message
    .update()
    .then(message => {
      res.status(200).json(message);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/", (req, res) => {
  const { message } = req.body;
  message
    .create({
      message: message
    })
    .then(message => res.status(201).json(message))
    .catch(err => res.status(400).json(err));
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  message
    .destroy({
      where: {
        uuid: id
      }
    })
    .then(message => {
      res.status(200).json(message);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
