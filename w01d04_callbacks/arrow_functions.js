// const sayHello = function(name){
//   return `Hello, ${name}`;
// };

// const sayHello = (name) => {
//   return `Hello, ${name}`;
// };

// const sayHello = name => {
//   return `Hello, ${name}`;
// };

const sayHello = name => `Hello, ${name}`;

// console.log(sayHello('James'));



const yellAtJames = function(anotherFunction) {
  const statement = anotherFunction("James");
  return `${statement.toUpperCase()}!!!`
};

// const returnVal = yellAtJames(function(name){
//   return `Hello, ${name}`;
// });
const returnVal = yellAtJames(name => `Hello, ${name}`);

console.log(returnVal);