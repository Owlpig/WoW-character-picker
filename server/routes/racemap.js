const express = require('express');
const racemap = require('../db/classes');

const router = express.Router();

router.get('/', async (req, res) => {
  res.send(racemap);
});

module.exports = router;
