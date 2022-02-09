// const relatives = ['yeti', 'gigantopithecus', 'chewbacca'];

// for(const relative of relatives) {
//   console.log(relative);
// }

const creature = {
  name: 'Harry',
  type: 'bigfoot',
  hasLargeFeet: true,
  relatives: ['yeti', 'gigantopithecus', 'chewbacca']
};

for(const key in creature){
  console.log(`the current key is: ${key} and the value is ${creature[key]}`);

}