// import mongoose
const mongoose = require('mongoose');

// use the schema constructor from mongoose
const { Schema } = mongoose;

// mongoose Schema constructor for conditions
const conditionSchema = new Schema({
  blinded: {
    type: Boolean,
    required: true,
    trim: true
  },

  charmed: {
    type: Boolean,
    required: true,
    trim: true
  },

  deafened: {
    type: Boolean,
    required: true,
    trim: true
  },

  frightened: {
    type: Boolean,
    required: true,
    trim: true
  },
  grappled: {
    type: Boolean,
    required: true,
    trim: true
  },

  incapacitated: {
    type: Boolean,
    required: true,
    trim: true
  },

  invisible: {
    type: Boolean,
    required: true,
    trim: true
  },
  paralyzed: {
    type: Boolean,
    required: true,
    trim: true
  },

  petrified: {
    type: Boolean,
    required: true,
    trim: true
  },

  poisoned: {
    type: Boolean,
    required: true,
    trim: true
  },
  prone: {
    type: Boolean,
    required: true,
    trim: true
  },

  restrained: {
    type: Boolean,
    required: true,
    trim: true
  },

  stunned: {
    type: Boolean,
    required: true,
    trim: true
  },

  unconscious: {
    type: Boolean,
    required: true,
    trim: true
  },
}
)

const Condition = mongoose.model('Condition', conditionSchema);

module.exports = Condition;