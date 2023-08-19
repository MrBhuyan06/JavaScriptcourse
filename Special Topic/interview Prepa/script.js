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
// function x() {
//   var a = 10;
//   return function y() {
//     console.log(a);
//   };
// }
// let z = x();
// z();

//closure in setinTime out
// function x() {
//   var a = 10;
//   setTimeout(() => {
//     console.log(a);
//   }, 3000);
// }
// x();

"use strict";

const Person = function (firstName, birthYear) {
  console.log(this);
  //instance prototype
  this.firstName = firstName;
  this.birthYear = birthYear;
  // never create the methods inside of a constructor function
  // this.calcAge = function () {
  //   return 2037 - this.birthYear;
  // };
  // };
};
const Abhishek = new Person("Abhihske", 2000);
console.log(Abhishek);
console.log(Abhishek.birthYear);
// console.log(Abhishek.calcAge());
const Gudu = new Person("gudu", 2001);
console.log(Gudu);
console.log(Abhishek instanceof Person);

Person.hey = function () {
  console.log("hey there❤️");
  console.log(this);
};
// Gudu.hey();

let arra = [1, 2, 3, 4];
console.log(arra.splice());
let newArray = arra.splice(2);
console.log(newArray);
console.log(arra);
// let newArrey = arra.slice();
// console.log(newArrey);
// console.log("hello");
// console.log(arra.slice(23));
