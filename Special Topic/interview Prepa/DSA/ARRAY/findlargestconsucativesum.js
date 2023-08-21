//find the largest consucative sum
//i/p [1,2,3,4,3,5,4,6,7,8]
//o/p  ?
//loop traves logic  total length - number of consucative +1

function findLargestSum(arr, num) {
  let sum = 0;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[j + i];
    }
    if (temp > sum) {
      sum = temp;
    }
  }
  return sum;
}
let res = findLargestSum([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4);
console.log(res);
