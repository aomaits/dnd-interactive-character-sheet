// import mongoose
const mongoose = require('mongoose');

// use the schema constructor from mongoose
const { Schema } = mongoose;

// mongoose Schema constructor for basics
const basicSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },

  gender: {
    type: String,
    required: true,
    trim: true
  },

  age: {
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

const Basic = mongoose.model('Basic', basicSchema);

module.exports = Basic;