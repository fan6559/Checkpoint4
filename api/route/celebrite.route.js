const express = require("express");
const sequelize = require("sequelize");
const router = express.Router();
const celebrite = require("../models/celebrite");

router.get("/", (req, res) => {
  celebrite
    .findAll()
    .then(celebrite => res.status(200).json(celebrite))
    .catch(err => res.status(400).json(err));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  celebrite
    .findOne({
      where: {
        uuid: id
      }
    })
    .then(celebrite => res.status(200).json(celebrite))
    .catch(err => res.status(400).json(err));
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  celebrite
    .update()
    .then(celebrite => {
      res.status(200).json(celebrite);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/", (req, res) => {
  const { nom, biographie, image } = req.body;
  celebrite
    .create({
      nom: nom,
      biographie: biographie,
      image: image
    })
    .then(celebrite => res.status(201).json(celebrite))
    .catch(err => res.status(400).json(err));
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  celebrite
    .destroy({
      where: {
        uuid: id
      }
    })
    .then(celebrite => {
      res.status(200).json(celebrite);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
