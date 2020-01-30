const express = require("express");
const sequelize = require("sequelize");
const router = express.Router();
const albumPhoto = require("../models/albumPhoto");

router.get("/", (req, res) => {
  albumPhoto
    .findAll()
    .then(albumPhoto => res.status(200).json(albumPhoto))
    .catch(err => res.status(400).json(err));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  albumPhoto
    .findOne({
      where: {
        uuid: id
      }
    })
    .then(albumPhoto => res.status(200).json(albumPhoto))
    .catch(err => res.status(400).json(err));
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  albumPhoto
    .update()
    .then(albumPhoto => {
      res.status(200).json(albumPhoto);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/", (req, res) => {
  const { photo } = req.body;
  albumPhoto
    .create({
      photo: photo
    })
    .then(albumPhoto => res.status(201).json(albumPhoto))
    .catch(err => res.status(400).json(err));
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  albumPhoto
    .destroy({
      where: {
        uuid: id
      }
    })
    .then(albumPhoto => {
      res.status(200).json(albumPhoto);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
