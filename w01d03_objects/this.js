const printBio = function(){
  // console.log(this);
  console.log(`Hello, my name is ${this.name} and I am a ${this.type}`);
}

// function with params
const doMath = function(num1, num2) {
  return num1 + num2;
}

// printBio();

const creature = {
  name: 'Harry',
  type: 'bigfoot',
  hasLargeFeet: true,
  sayBio: printBio,
  doMath: doMath,

};

const anotherCreature = {
  name: 'Lisa',
  type: 'el chupacabra',
  hasLargeFeet: false,
  sayBio: printBio
};

// creature.sayBio();
// anotherCreature.sayBio();

console.log(creature.doMath(16, 7));