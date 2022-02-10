const nums = [1, 2, 3, 4, 50];

// for(const num of nums) {
//   const summedValue = num + 5;
//   console.log(summedValue);
// };

// nums.forEach(num => {
//   const summedValue = num + 5;
//   console.log(summedValue);
// });

const myForEach = (arr, callback) => {
  // loop through each element in the array (arr)
  // call the callback function on each element
  for(const element of arr) {
    callback(element);
  };
};

myForEach(nums, (num) => {
  const val = num / 17;
  console.log(val);
});

const names = ['Jennifer', 'James', 'Pippa', 'Prairie'];

myForEach(names, (name) => {
  console.log(`Hey there, ${name}!!!`)
})