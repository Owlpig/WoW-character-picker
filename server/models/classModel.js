const mongoose = require('mongoose');

const classSchema = new mongoose.Schema(
  {
    classId: {
      type: Number,
      required: true,
    },
    name: String,
    races: Array,
    icon: String,
    specs: [{
      id: String,
      role: String,
      name: String,
      icon: String,
    }],
    armor: String,
  },
);

const Classes = mongoose.model('Classes', classSchema);

module.exports = Classes;
