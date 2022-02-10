const myNum = 33;
const yourNum = myNum;

// console.log(yourNum);

const sayPetName = function(petName) {
  return `My pet's name is ${petName}`;
};

const printPetName = sayPetName;

console.log(sayPetName("Pippa"));
console.log(printPetName("Prairie"));

sayPetName.pizza = 'pepperoni';
console.log(sayPetName);
