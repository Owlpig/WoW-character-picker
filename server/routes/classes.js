const express = require('express');
const fetch = require('node-fetch');
const Classes = require('../models/classModel');
const armor = require('../db/armor');

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

const fetchSpecDetails = async id => {
  const rawSpecs = await fetch(`https://us.api.blizzard.com/data/wow/playable-specialization/${id}?namespace=static-us&locale=en_US&access_token=${accessToken}`);
  const specData = rawSpecs.json();
  return specData;
};

const fetchSpecMedia = async id => {
  const rawSpecs = await fetch(`https://us.api.blizzard.com/data/wow/media/playable-specialization/${id}?namespace=static-us&locale=en_US&access_token=${accessToken}`);
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
    c.save();
  });

  res.send(dbClasses);
});

router.put('/armor', async (req, res) => {
  const dbClasses = await Classes.find();
  dbClasses.forEach(async c => {
    const dbArmor = c;
    const armorType = armor.find(a => a.id === c.classId);
    dbArmor.armor = armorType.type;
    c.save();
  });
  res.send(dbClasses);
});

router.put('/roles', async (req, res) => {
  const dbClasses = await Classes.find();
  dbClasses.forEach(async c => {
    c.specs.forEach(async s => {
      const specDetails = await fetchSpecDetails(s.id);
      const spec = s;
      spec.role = specDetails.role.name;
      await s.save({ suppressWarning: true });
    });
    c.markModified('specs');
    await c.save();
  });

  res.send(dbClasses);
});

router.put('/media', async (req, res) => {
  const dbClasses = await Classes.find();
  dbClasses.forEach(async c => {
    await c.specs.forEach(async s => {
      const specDetails = await fetchSpecMedia(s.id);
      const spec = s;
      spec.icon = specDetails.assets[0].value;
      console.log(spec);
      await s.save({ suppressWarning: true });
    });
    c.markModified('specs');
    await c.save();
  });

  res.send(dbClasses);
});

module.exports = router;
