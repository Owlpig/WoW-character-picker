const express = require('express');
const raceicons = require('../db/raceicons.json');

const router = express.Router();

router.get('/', async (req, res) => {
  res.send(raceicons);
});

module.exports = router;
