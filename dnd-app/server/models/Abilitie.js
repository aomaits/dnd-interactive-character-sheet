// import mongoose
const mongoose = require('mongoose');

// use the schema constructor from mongoose
const { Schema } = mongoose;

// mongoose Schema constructor for request
const abilitieSchema = new Schema({
    acrobaticsBonus: {
        type: Number,
        required: true,
        trim: true
    },

    acrobaticsProficiency: {
        type: Boolean,
        required: true,
        trim: true
    },

    animalHandlingBonus: {
        type: Number,
        required: true,
        trim: true
    },

    animalHandlingProficiency: {
        type: Boolean,
        required: true,
        trim: true
    },

    arcanaBonus: {
        type: Number,
        required: true,
        trim: true
    },

    arcanaProficiency: {
        type: Boolean,
        required: true,
        trim: true
    },

    athleticsBonus: {
        type: Number,
        required: true,
        trim: true
    },

    athleticsProficiency: {
        type: Boolean,
        required: true,
        trim: true
    },

    deceptionBonus: {
        type: Number,
        required: true,
        trim: true
    },

    deceptionProficiency: {
        type: Boolean,
        required: true,
        trim: true
    },

    historyBonus: {
        type: Number,
        required: true,
        trim: true
    },

    historyProficiency: {
        type: Boolean,
        required: true,
        trim: true
    },

    insightBonus: {
        type: Number,
        required: true,
        trim: true
    },

    insightProficiency: {
        type: Boolean,
        required: true,
        trim: true
    },

    intimidationBonus: {
        type: Number,
        required: true,
        trim: true
    },

    intimidationProficiency: {
        type: Boolean,
        required: true,
        trim: true
    },

    investigationBonus: {
        type: Number,
        required: true,
        trim: true
    },

    investigationProficiency: {
        type: Boolean,
        required: true,
        trim: true
    },

    medicineBonus: {
        type: Number,
        required: true,
        trim: true
    },

    medicineProficiency: {
        type: Boolean,
        required: true,
        trim: true
    },

    natureBonus: {
        type: Number,
        required: true,
        trim: true
    },

    natureProficiency: {
        type: Boolean,
        required: true,
        trim: true
    },

    perceptionBonus: {
        type: Number,
        required: true,
        trim: true
    },

    perceptionProficiency: {
        type: Boolean,
        required: true,
        trim: true
    },


    performanceBonus: {
        type: Number,
        required: true,
        trim: true
    },

    performanceProficiency: {
        type: Boolean,
        required: true,
        trim: true
    },

    persuasionBonus: {
        type: Number,
        required: true,
        trim: true
    },

    persuasionProficiency: {
        type: Boolean,
        required: true,
        trim: true
    },


    religionBonus: {
        type: Number,
        required: true,
        trim: true
    },

    religionProficiency: {
        type: Boolean,
        required: true,
        trim: true
    },

    sleightOfHandBonus: {
        type: Number,
        required: true,
        trim: true
    },

    sleightOfHandProficiency: {
        type: Boolean,
        required: true,
        trim: true
    },

    stealthBonus: {
        type: Number,
        required: true,
        trim: true
    },

    stealthProficiency: {
        type: Boolean,
        required: true,
        trim: true
    },

    survivalBonus: {
        type: Number,
        required: true,
        trim: true
    },

    survivalProficiency: {
        type: Boolean,
        required: true,
        trim: true
    },
},
    // {
    //     toJSON: {
    //         getter: true,
    //     },
    //     id: false,
    // }
)

const Abilitie = mongoose.model('Abilitie', abilitieSchema);

module.exports = Abilitie;