const express = require('express');
const racemap = require('../db/racemap.json');

const router = express.Router();

router.get('/', async (req, res) => {
  res.send(racemap);
});

module.exports = router;
