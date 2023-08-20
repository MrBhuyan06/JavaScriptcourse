//store Duplicate ele in an array
//[1,2,3,4,2]
//[2]
// let arr = [1, 2, 3, 4, 2];
// let duplicate = arr.filter((ele, index) => arr.indexOf(ele) != index);
// console.log(duplicate);

let dup = [];
let arr = [1, 2, 3, 4, 2];
for (let i = 0; i < arr.length; i++) {
  if (arr.indexOf(arr[i]) != i) {
    dup.push(arr[i]);
  }
}
console.log(dup);
