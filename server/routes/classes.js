const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();
const accessToken = 'US4jhAmRKJxqbSz78zPqyxOEZ2wF85yWLv'

const fetchClasses = async () => {
  const rawClasses = await fetch(`https://us.api.blizzard.com/data/wow/playable-class/index?namespace=static-us&locale=en_US&access_token=${accessToken}`)
  const classData = rawClasses.json()
  return classData;
};

router.get('/', async (req, res) => {
  const classes = await fetchClasses()
  res.send(classes);
});

module.exports = router;
