// objects
const creature = {
  name: 'Harry',
  type: 'bigfoot',
  hasLargeFeet: true,
  relatives: ['yeti', 'gigantopithecus', 'chewbacca']
};

// dot notation
console.log("the value is dot notation", creature.relatives);

// square bracket notation
const key = 'relatives';
console.log(creature[key]); 

