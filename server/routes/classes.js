const express = require('express');
const fetch = require('node-fetch');
const Classes = require('../models/classModel');

const router = express.Router();
const accessToken = process.env.API_TOKEN;

const fetchClasses = async () => {
  const rawClasses = await fetch(`https://us.api.blizzard.com/data/wow/playable-class/index?namespace=static-us&locale=en_US&access_token=${accessToken}`);
  const classData = rawClasses.json();
  return classData;
};

const fetchSpecs = async id => {
  const rawSpecs = await fetch(`https://us.api.blizzard.com/data/wow/playable-class/${id}?namespace=static-us&locale=en_US&access_token=${accessToken}`);
  const specData = rawSpecs.json();
  return specData;
};

router.get('/', async (req, res) => {
  const classes = await fetchClasses();
  res.send(classes);
});

router.put('/', async (req, res) => {
  const dbClasses = await Classes.find();
  dbClasses.forEach(async c => {
    const { specializations } = await fetchSpecs(c.classId);
    const dbSpecs = c.specs;
    specializations.forEach(s => dbSpecs.push({ name: s.name, id: s.id }));
  });

  res.send(dbClasses);
});

module.exports = router;
