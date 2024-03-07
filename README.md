# dnd-interactive-character-sheet
React / MongoDB full-stack app to store and create DND characters

TODO - set up serverjs and all things server! 

Growth goals
- Solid CSS
- Typescript on the client side
- React on the client side
- MongoDB / ApolloGraphQL


Goals
1. Create a DB storing character information using created character
Models: 
Abilities 

Basics (name, race, subrace, class, level)
Vital Stats (STR - CHA, proficiency bonus, walking speed, inspiration, current hit points, maximum hp, temp hp)
Combat Stats (initiative, ac, defenses (resistances, immunities, vulnerabilities), conditions (blinded, charmed, deafened, frightened, grappled, incapacitated, invisible, paralyzed, petrified, poisoned, prone, restrained, stnned, unconscious | exhausted (level 1-6)))
Traits
Weapons

Spells
Saves  
Senses 
Proficiencies


2. Create a static character sheet for 1 character
Layout: 
Basics (name, race, subrace, class, level)
Saves (saving throws)  -- collapsable
Senses -- collapsable
Proficiencies & Languages -- collapsable
Vital Stats
Combat Stats
Abilities
Traits
Weapons
Spells
3. All interactivity on the sheet 
  - roll / read / edit buttons on the top of the sheet? 
  - rolling dice when selecting certain items: select for advantage, disadvantage, display a popup with the number and a conditional string based on the roll
  - expand/collapse spell list, weapons explanations, character's 
4. Store multiple character's data in the DB
5. Allow users to create a character thru guided input that then stores it in the DB
6. Allow users to create an audio bio for their character (record, play) (no delete, just record over it?)