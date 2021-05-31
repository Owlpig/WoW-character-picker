const express = require('express');
const fetch = require('node-fetch');
const Races = require('../models/raceModel');

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

router.put('/', async (req, res) => {
  const races = await fetchRaces();
  races.forEach(async r => {
    const race = await Races.findOne({ id: r.id });
    race.name = r.name;
    race.save();
  });

  res.send(races);
});

module.exports = router;
