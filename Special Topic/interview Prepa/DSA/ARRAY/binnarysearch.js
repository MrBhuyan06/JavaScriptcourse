//binary search

function binarysearch(arr, num) {
  let min = 0;
  let max = arr.length - 1;
  let midIndex = Math.floor((min + max) / 2);
  while (min <= max) {
    if (arr[midIndex] < num) {
      min = midIndex + 1;
    } else if (arr[midIndex] > num) {
      max = midIndex - 1;
    } else {
      return midIndex;
    }
  }
  return -1;
}

let res = binarysearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 7);
console.log(res);
