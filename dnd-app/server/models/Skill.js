// import mongoose
const mongoose = require('mongoose');

// use the schema constructor from mongoose
const { Schema } = mongoose;

// mongoose Schema constructor for skills
const skillSchema = new Schema({
  acrobaticsBonus: {
    type: Number,
    required: true,
    trim: true
  },

  acrobaticsProf: {
    type: Boolean,
    required: true,
    trim: true
  },

  animalHandlingBonus: {
    type: Number,
    required: true,
    trim: true
  },

  animalHandlingProf: {
    type: Boolean,
    required: true,
    trim: true
  },

  arcanaBonus: {
    type: Number,
    required: true,
    trim: true
  },

  arcanaProf: {
    type: Boolean,
    required: true,
    trim: true
  },

  athleticsBonus: {
    type: Number,
    required: true,
    trim: true
  },

  athleticsProf: {
    type: Boolean,
    required: true,
    trim: true
  },

  deceptionBonus: {
    type: Number,
    required: true,
    trim: true
  },

  deceptionProf: {
    type: Boolean,
    required: true,
    trim: true
  },

  historyBonus: {
    type: Number,
    required: true,
    trim: true
  },

  historyProf: {
    type: Boolean,
    required: true,
    trim: true
  },

  insightBonus: {
    type: Number,
    required: true,
    trim: true
  },

  insightProf: {
    type: Boolean,
    required: true,
    trim: true
  },

  intimidationBonus: {
    type: Number,
    required: true,
    trim: true
  },

  intimidationProf: {
    type: Boolean,
    required: true,
    trim: true
  },

  investigationBonus: {
    type: Number,
    required: true,
    trim: true
  },

  investigationProf: {
    type: Boolean,
    required: true,
    trim: true
  },

  medicineBonus: {
    type: Number,
    required: true,
    trim: true
  },

  medicineProf: {
    type: Boolean,
    required: true,
    trim: true
  },

  natureBonus: {
    type: Number,
    required: true,
    trim: true
  },

  natureProf: {
    type: Boolean,
    required: true,
    trim: true
  },

  perceptionBonus: {
    type: Number,
    required: true,
    trim: true
  },

  perceptionProf: {
    type: Boolean,
    required: true,
    trim: true
  },

  performanceBonus: {
    type: Number,
    required: true,
    trim: true
  },

  performanceProf: {
    type: Boolean,
    required: true,
    trim: true
  },

  persuasionBonus: {
    type: Number,
    required: true,
    trim: true
  },

  persuasionProf: {
    type: Boolean,
    required: true,
    trim: true
  },

  religionBonus: {
    type: Number,
    required: true,
    trim: true
  },

  religionProf: {
    type: Boolean,
    required: true,
    trim: true
  },

  sleightOfHandBonus: {
    type: Number,
    required: true,
    trim: true
  },

  sleightOfHandProf: {
    type: Boolean,
    required: true,
    trim: true
  },

  stealthBonus: {
    type: Number,
    required: true,
    trim: true
  },

  stealthProf: {
    type: Boolean,
    required: true,
    trim: true
  },

  survivalBonus: {
    type: Number,
    required: true,
    trim: true
  },

  survivalProf: {
    type: Boolean,
    required: true,
    trim: true
  },
}
)

const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;