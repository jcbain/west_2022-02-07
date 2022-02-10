const sayHello = function(name){
  return `Hello, ${name}`;
};

const yellAtJames = function(anotherFunction) {
  const statement = anotherFunction("James");
  return `${statement.toUpperCase()}!!!`
};

// const returnValue = yellAtJames(sayHello);
const returnValue = yellAtJames(function(name){
  return `You have nice knees, ${name}`;
});
console.log(returnValue);

// const addThree = function(num){
//   return num + 3;
// };

// const myNum = 10;
// addThree(myNum);
// addThree(30);

