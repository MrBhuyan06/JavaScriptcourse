// Reverse An array with Multipe way
//using reverse method
let originalArray = [1, 2, 3, 4, 5];
// const revArray = originalArray.reverse();
// console.log(originalArray);
// console.log(revArray);

// 2.using spread
// const revArray = [...originalArray].reverse();
// console.log(revArray);
// 3.map
// const revArray = originalArray.map((_, index, arr) => {
//   return arr[arr.length - 1 - index];
// });
// console.log(revArray);
// 4.for of

// let revArray = [];
// for (ele of originalArray) {
//   revArray.unshift(ele);
// }
// console.log(revArray);
// 5.reduce

// const revArray = originalArray.reduce((acc, curr) => {
//   acc.unshift(curr);
//   return acc;
// }, []);
// console.log(revArray);

//for loop

// let revArry = [];

// for (let i = originalArray.length - 1; i >= 0; i--) {
//   revArry.push(originalArray[i]);
// }
// console.log(revArry);

// 7.while loop

// let revArray = [];
// let i = originalArray.length - 1;
// while (i >= 0) {
//   revArray.push(originalArray[i]);
//   i--;
// }
// console.log(revArray);

//recursion

// function revRecurssion(arr) {
//   if (arr.length == 0) {
//     return [];
//   } else {
//     //store the first value and send rest fro reverse
//     const [first, ...rest] = arr;
//     return [...revRecurssion(rest), first];
//   }
// }
// const revArry = revRecurssion(originalArray);
// console.log(revArry);
