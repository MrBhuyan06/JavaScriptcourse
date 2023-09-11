//Rotate an array
//for 1 postion
// let arr = [1, 2, 3, 4, 5, 7];
// function rotatingArray(arr) {
//   let temp = arr[arr.length - 1];
//   for (let i = arr.length - 1; i >= 1; i--) {
//     arr[i] = arr[i - 1];
//   }
//   arr[0] = temp;
//   return arr;
// }
// let res = rotatingArray(arr);
// console.log(res);

// for nth postion
// let arr = [1, 2, 3, 4, 5, 7];
// function rotatingArray(arr, n) {
//
// let res = rotatingArray(arr, 2);
// console.log(res);
let arr = [1, 2, 3, 4, 5, 7];
function rotatingArray(arr, pos, dir) {
  let n = pos;
  if (dir == "right") {
    for (let j = 0; j <= n - 1; j++) {
      let temp = arr[arr.length - 1];

      for (let i = arr.length - 1; i >= 1; i--) {
        arr[i] = arr[i - 1];
      }
      arr[0] = temp;
    }
    return arr;
  } else {
    for (let j = 0; j <= n - 1; j++) {
      let temp = arr[0];

      for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
      }
      arr[arr.length - 1] = temp;
    }
    return arr;
  }
}
let res = rotatingArray(arr, 2, "left");
console.log(res);
