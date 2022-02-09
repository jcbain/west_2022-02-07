// methods -> functions inside objects

const growl = function(){
  return "grrrrrrr!!!";
};


const creature = {
  name: 'Harry',
  type: 'bigfoot',
  hasLargeFeet: true,
  // growl: function(){
  //   return "grrrrrrr!"
  // }
  makeNoise: growl
};

console.log(creature.makeNoise());
