const Races = require('../models/raceModel');
const ClassModel = require('../models/classModel');
const racedata = require('../db/races');
const classdata = require('../db/classes');

classdata.forEach(wowclass => {
  const newClass = new ClassModel({
    name: wowclass.name,
    id: wowclass.id,
    races: wowclass.races,
  });
  newClass.save();
});

racedata.forEach(race => {
  const newRace = new Races({
    id: race.id,
    icon: race.icon,
  });
  newRace.save();
});
