//check sum zer
//input [-5,-4,-3,-2,0,2,4,6,8]
//output [first pair sum ==0]
// [?,?]

// function checkSumPair(arr) {
//   for (ele of arr) {
//     // console.log(ele);
//     for (let i = 1; i < arr.length; i++) {
//       if (ele + arr[i] === 0) {
//         return [ele, arr[i]];
//       }
//     }
//   }
// }
// let res = checkSumPair([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
// console.log(res);
//o(n^2)
// optimised approach
//pointer 1 pointer will be index=0
//pointer 2 will be index=arr.length-1
//if(sum>0 (rigth---)) if (sum<0 left ++)

function checkSumPairZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  for (let i = left; i < right; i++) {
    let sum = arr[right] + arr[left];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

let result = checkSumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(result);

let arr = [-5, -4, -3, -2, 0, 2, 4, 6, 8];
console.log(arr.indexOf(-2));
