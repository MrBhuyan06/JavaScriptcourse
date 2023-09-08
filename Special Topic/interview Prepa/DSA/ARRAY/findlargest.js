//find the largest number in an given array
let arr = [21, 12, 34, 11, 32, 45, 1, 5, 28];

//make the first index as the largest
// let largest = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > largest) {
//     largest = arr[i];
//   }
// }
// console.log(`The largest number is ${largest}`);

// we have multiple approach to slove this problem
// 1.Using Math.max
// let largestNum = Math.max(...arr);
// console.log(largestNum);
//2.using the reducers
// const largestNo = arr.reduce((max, curr) => (max > curr ? max : curr), arr[0]);
// console.log(largestNo);
// 3.using sort methods
// const largestNumber = arr.sort((a, b) => b - a)[0];
// console.log(largestNumber);
// 4.Math.max using applay method
// const largestNumber = Math.max.apply(null, arr);
// console.log(largestNumber);
// 5.forEach loop
// let maxNumber = arr[0];
// arr.forEach((num) => {
//   if (num > maxNumber) {
//     maxNumber = num;
//   }
// });
//6 for loop
// let maxNumber = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > maxNumber) {
//     maxNumber = arr[i];
//   }
// }
// console.log(maxNumber);
