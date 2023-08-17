// "use strict";
// printName();
// function printName() {
//   console.log(names);
// }
// let names = "Abhihske";

/* {
  let names = "abhishek";
  var age = "23";
  const add = "bbsr";
}
console.log(age);
console.log(names);
console.log(add); */
// console.log("abh");

// function scopeVar() {
//   var names = "abhishek";
// }

// console.log(names);

// let age = "23";
// console.log(age === this.age);
// var age = 23;
// var age = 65;
// console.log(age);

//this
// console.log(this === window);
// function printThisValue() {
//   console.log(this);
// }
// printThisValue();
// let printThisValueExp = function () {
//   console.log(this);
// };

// let printThisValueInArroe = () => {
//   console.log(this);
// };
// printThisValueInArroe();
//closure

// function x() {
//   var a = 10;
//   function y() {
//     console.log(a);
//   }
//   y();
// }
function x() {
  var a = 10;
  return function y() {
    console.log(a);
  };
}
let z = x();
z();
