const sayHello = function(name){
  return `Hello, ${name}`;
};
// higher order function
// a function (f1) that takes another function (f2)
// in order to invoke that function (f2)
const yellAtJames = function(anotherFunction) {
  const statement = anotherFunction("James");
  return `${statement.toUpperCase()}!!!`
};

const yellAtSomeone = function(anotherFunction, name) {
  const statement = anotherFunction(name);
  return `${statement.toUpperCase()}!!!`
};

const sayGoodbye = function(name) {
  return `Get out of here, ${name}`;
};


// console.log(yellAtJames(sayGoodbye));
console.log(yellAtSomeone(sayGoodbye, "Gus"))