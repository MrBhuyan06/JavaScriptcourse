//find the largest number in an given array
let arr = [21, 12, 34, 11, 32, 45, 1, 5, 28];

//make the first index as the largest
let largest = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}
console.log(`The largest number is ${largest}`);
