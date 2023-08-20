//second largest number
// let arr = [ 10, 324, 45, 90, 9808 ];
//324

function secondLargestNumber(arr) {
  //   let largest = (secondlarget = -1);
  let largest = -1;
  let secondLargest = -1;
  //   console.log(largest, secondlarget);
  //find largest
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      //   console.log(arr[i]);
      largest = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    }
  }
  if (secondLargest == -1) {
    console.log("there is no second largest element");
  } else {
    return secondLargest;
  }
  //   console.log(largest);
}
let result = secondLargestNumber([10, 324, 45, 90, 9808]);
console.log(result);
