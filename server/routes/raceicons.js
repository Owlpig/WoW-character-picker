const express = require('express');
const raceicons = require('../db/races');

const router = express.Router();

router.get('/', async (req, res) => {
  res.send(raceicons);
});

module.exports = router;
