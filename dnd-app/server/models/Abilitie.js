// import mongoose
const mongoose = require('mongoose');

// use the schema constructor from mongoose
const { Schema } = mongoose;

// mongoose Schema constructor for abilities
const abilitieSchema = new Schema({

    strengthValue: {
        type: Number,
        required: true,
        trim: true
    },

    strengthBonus: {
        type: Number,
        required: true,
        trim: true
    },

    dexterityValue: {
        type: Number,
        required: true,
        trim: true
    },

    dexterityBonus: {
        type: Number,
        required: true,
        trim: true
    },

    constitutionValue: {
        type: Number,
        required: true,
        trim: true
    },

    constitutionBonus: {
        type: Number,
        required: true,
        trim: true
    },

    intelligenceValue: {
        type: Number,
        required: true,
        trim: true
    },

    intelligenceBonus: {
        type: Number,
        required: true,
        trim: true
    },

    wisdomValue: {
        type: Number,
        required: true,
        trim: true
    },

    wisdomBonus: {
        type: Number,
        required: true,
        trim: true
    },

    charismaValue: {
        type: Number,
        required: true,
        trim: true
    },

    charismaBonus: {
        type: Number,
        required: true,
        trim: true
    },
},
    // {
    //   toJSON: {
    //     getter: true,
    //   },
    //   id: false,
    // }
)

const Abilitie = mongoose.model('Abilitie', abilitieSchema);

module.exports = Abilitie;