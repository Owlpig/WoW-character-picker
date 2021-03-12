const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();
const accessToken = 'USnfk6O3P9Ir1JbSvMLIQsWulLJhfmrfn0';

const fetchRaces = async () => {
  const rawRaces = await fetch(`https://us.api.blizzard.com/data/wow/playable-race/index?namespace=static-us&locale=en_US&access_token=${accessToken}`);
  const raceData = rawRaces.json();
  return raceData;
};

router.get('/', async (req, res) => {
  const races = await fetchRaces();
  res.send(races);
});

module.exports = router;
