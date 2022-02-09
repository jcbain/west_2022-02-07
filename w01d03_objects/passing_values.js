// primitives pass by value
const creatureName = "bigfoot";

const printDifferentCreature = function(someCreature) {
  someCreature = 'el chupacabra';
  console.log('creature during function call: ', someCreature);
};


console.log('creature before function call:', creatureName);
printDifferentCreature(creatureName);
console.log('creature after function call:', creatureName);

// objects
const creature = {
  name: 'Harry',
  type: 'bigfoot',
  hasLargeFeet: true,
  relatives: ['yeti', 'gigantopithecus', 'chewbacca']
};

const printDifferentCreatureName = function(creatureObj) {
  creatureObj.type = 'el chupacabra';
  console.log('creature name during function call', creatureObj.type);
}

console.log('creature before function call', creature);
printDifferentCreatureName(creature);
console.log('creature after function call', creature);



