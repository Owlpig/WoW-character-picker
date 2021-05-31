const express = require('express');
const fetch = require('node-fetch');
// const Classes = require('../models/classModel');

const router = express.Router();
const accessToken = 'USnfk6O3P9Ir1JbSvMLIQsWulLJhfmrfn0';

const fetchClasses = async () => {
  const rawClasses = await fetch(`https://us.api.blizzard.com/data/wow/playable-class/index?namespace=static-us&locale=en_US&access_token=${accessToken}`);
  const classData = rawClasses.json();
  return classData;
};

router.get('/', async (req, res) => {
  const classes = await fetchClasses();
  res.send(classes);
});

// router.put('/', async (req, res) => {
//   const classes = await fetchClasses();
//   classes.forEach(c => {
//     const dbClass = await Classes.findOne({id: c.id})
//   });

//   res.send(classes);
// });

module.exports = router;
