/*
proficiencyBonus:
walkingSpeed:
inspiration:
currentHitPoints:
maximumHitPoints:
temporaryHitPoints:
initiativeBonus:
armorClass:
defenses:
conditions:
weaponName:
weaponRange
weaponHitBonus:
weaponDamage:
weaponNotes: 
*/

// import mongoose
const mongoose = require('mongoose');

// use the schema constructor from mongoose
const { Schema } = mongoose;

// import dependant schemas
// const abilities = require('./Abilitie')

// mongoose Schema constructor for characters
const characterSchema = new Schema({
    abilities: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Abilitie'
        }
    ],
    basics: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Basic'
        }
    ],
    skills: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Skill'
        }
    ],
})

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;