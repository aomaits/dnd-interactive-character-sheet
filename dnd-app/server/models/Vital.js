// import mongoose
const mongoose = require('mongoose');

// use the schema constructor from mongoose
const { Schema } = mongoose;

// mongoose Schema constructor for vitals
const vitalSchema = new Schema({
  initiative: {
    type: Number,
    required: true,
    trim: true
  },

  armorClass: {
    type: Number,
    required: true,
    trim: true
  },

  defenses: {
    type: String,
    required: true,
    trim: true
  },

  race: {
    type: String,
    required: true,
    trim: true
  },

  class: {
    type: String,
    required: true,
    trim: true
  },

  level: {
    type: Number,
    required: true,
    trim: true
  },
}
)

const Vital = mongoose.model('Vital', vitalSchema);

module.exports = Vital;