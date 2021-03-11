const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();
const accessToken = 'US4jhAmRKJxqbSz78zPqyxOEZ2wF85yWLv'

const fetchRaces = async () => {
  const rawRaces = await fetch(`https://us.api.blizzard.com/data/wow/playable-race/index?namespace=static-us&locale=en_US&access_token=${accessToken}`)
  const raceData = rawRaces.json()
  return raceData;
};

router.get('/', async (req, res) => {
  const races = await fetchRaces()
  res.send(races);
});

module.exports = router;