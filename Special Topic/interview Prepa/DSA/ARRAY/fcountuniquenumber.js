//counttheuniquenumber
// function countunique(arr) {
//   let count = 0;
//   if (arr.length <= 0) {
//     return "array is empty";
//   }
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       console.log(arr[i], arr[j]);
//       if (!arr[i] === arr[j]) {
//         count = count + 1;
//       }
//     }
//   }
//   return count + 1;
// }
// let res = countunique([1, 1, 2, 2, 3, 3, 4, 5, 4, 6]);
// console.log(res);

function countQuneEle(arr) {
  if (arr <= 0) {
    return "array is empty";
  }
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
let res = countQuneEle([1, 1, 2, 2, 3, 3, 4, 4, 5, 6]);
console.log(res);
