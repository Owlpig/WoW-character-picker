const express = require('express');
const fetch = require('node-fetch');
const Races = require('../models/raceModel');
const classes = require('../db/classes');

const router = express.Router();
const accessToken = process.env.API_TOKEN;

const fetchRaces = async () => {
  const rawRaces = await fetch(`https://us.api.blizzard.com/data/wow/playable-race/index?namespace=static-us&locale=en_US&access_token=${accessToken}`);
  const raceData = rawRaces.json();
  return raceData;
};

const fetchRaceDetails = async id => {
  const rawRace = await fetch(`https://us.api.blizzard.com/data/wow/playable-race/${id}?namespace=static-us&locale=en_US&access_token=${accessToken}`);
  const raceData = rawRace.json();
  return raceData;
};

router.get('/', async (req, res) => {
  const races = await fetchRaces();
  res.send(races);
});

router.put('/', async (req, res) => {
  const { races } = await fetchRaces();
  races.forEach(async r => {
    const race = await Races.findOne({ id: r.id });
    race.name = r.name;
    race.save();
  });

  res.send(races);
});

router.put('/factions', async (req, res) => {
  const races = await Races.find();
  races.forEach(async r => {
    const race = await fetchRaceDetails(r.id);
    const dbRace = r;
    dbRace.faction = race.faction.name;
    r.save();
  });

  res.send(races);
});

router.put('/classmap', async (req, res) => {
  const races = await Races.find();
  races.forEach(async r => {
    const validClasses = classes.filter(c => c.races.includes(r.id));
    const dbRace = r;
    validClasses.forEach(c => dbRace.classes.push(c.id));

    r.save();
  });

  res.send(races);
});

module.exports = router;
