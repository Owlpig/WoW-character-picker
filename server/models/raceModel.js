const mongoose = require('mongoose');

const raceSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    name: String,
    icon: {
      male: String,
      female: String,
    },
    faction: String,
    classes: Array,
  },
);

const Race = mongoose.model('Race', raceSchema);

module.exports = Race;
