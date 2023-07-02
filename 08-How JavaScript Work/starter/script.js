'use strict';

// Scope for block and funtion() level
//  let and cost is block level level scope
// - Here fullName is accessible to OutSide of block Scope
// const age = 90;
// if (age > 89) {
//   var fullname = 'Abhishek';
// }

// console.log(fullname);
// Function is also called as block level scope in strict mode

// function a() {
//   var fullname = 'Abhihshek';
// }
// console.log(fullname);

// function calAge(birthYear) {
//   const age = 2023 - birthYear;
//   function printAge() {
//     let outPut = ` ${firstName}You are ${age}, born in ${birthYear}`;
//     console.log(outPut);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       //Creating New Variable as a same name as outer Scope's variable
//       const firstName = 'Bhuyan';
//       //Reassing Outer Scope's Variable
//       outPut = 'New Output';
//       const str = `oh, and you are a millenial,${firstName}`;
//       console.log(str);
//       function add(a, b) {
//         return a + b;
//       }
//     }

//     // console.log(str);
//     console.log(millenial);
//     console.log(outPut);
//     // console.log(add(2, 3)); //function are called block level  scope in strict mode
//   }
//   printAge();
//   return age;
// }

// //global Variable
// const firstName = 'Abhi';
// calAge(1991);

// //Hoisting
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Abhi';
// let job = 'Student';
// const year = 2000;

// //function

// console.log(addDel(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDel(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = () => a + b;

// Lets change the const to var and see the magic
// Now If we want to use before declaring it
// console.log(addExpr(2, 3));
//Oops Get a error as script.js:63 Uncaught TypeError: addExpr is not a function
// just log(addExpr) you will get undefine and in undefine we are  doing undefine(2, 3)
// console.log(addExpr);
// console.log(addArrow(2, 3));

// var addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = () => a + bvar;

// Example

// if (!numProduct) {
//   deleteShoppingChart();
// }

// var numProduct = 10;
// function deleteShoppingChart() {
//   console.log('All Prodcut is deleted');
// }

// Varibale create in with var will create a properties in global window object
// var x = 1;
// let y = 2;
// const g = 3;
// console.log(x === window.x);
// console.log(y === window.y);
// console.log(g === window.g);

// This key Word Exmaple
//outSide any function or in global object
// console.log(this);
// const calcAge = function (birthYear) {
//   console.log(2023 - birthYear);
//   console.log(this);
// };
// const calcAgeArrow = birthYear => {
//   console.log(2023 - birthYear);
//   //Hexical to its parent so parent is globaal Scope
//   console.log(this);
// };
// // 2-Regural Function Call
// calcAge(1992);
// //Arrow Function Call
// calcAgeArrow(1992);

// const abhi = {
//   year: 1991,
//   calAge: function () {
//     console.log(this);
//     console.log(2023 - this.year);
//   },
// };

// abhi.calAge();

// const smriti = {
//   year: 2017,
// };
// //Method browiing
// smriti.calAge = abhi.calAge;

// smriti.calAge();

// const f = abhi.calAge;
// f();

// Arrow Function And regular function

// abhi.firstName;
// abhi.lastName;
// bhuyan;
// console.log(bhuyan);

// var firstName = 'Abhishek ';
// const abhi = {
//   firstName: 'Abhishek',
//   year: 1991,
//   calAge: function () {
//     console.log(this);
//     console.log(2023 - this.year);
// solution 1
// const self = this; // self or that
// const isMillenial = function () {
//   console.log(this); // undefine even through it is inside the function
//   // inside any regular function this is a undefine
//   // solution self variable or arrow function
//   //   console.log(this.year >= 1981 && this.year <= 1996);
//   console.log(self.year >= 1981 && self.year <= 1996);
// };
// solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(self.year >= 1981 && self.year <= 1996);
//     };

//     isMillenial();
//   },
//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
//   greet: function () {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// abhi.greet();
//when we tring to access the properties from an obj which is not present give you undefine
// console.log(this.firstName);
// abhi.calAge();

//Arugemnt keyword

// const addExprs = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExprs(2, 5);
// addExprs(2, 5, 6, 7, 8);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);

//How primitive and object is store

// let age = 23;
// let oldage = age;
// age = 31;
// console.log(age);
// console.log(oldage);

// const me = {
//   name: 'Abhi',
//   age: 30,
// };

// const friend = me;
// friend.age = 27;

// console.log('Friend', friend);
// console.log('Me', me);

//primitive type
// let lastname = 'Bhuyan';
// let OldLastName = lastname;
// lastname = 'Pradhan';

// //Because is primitive value is being save it own memmory address in stack
// console.log(lastname, OldLastName);

// const smriti = {
//   firstName: 'smriti',
//   lastName: 'Pradhan',
//   age: 27,
// };

// const marriedSmriti = smriti; // copy the reference

// marriedSmriti.lastName = 'Bhuyan';
// // console.log('Before Marriage', smriti);
// // console.log('After Marriage', marriedSmriti);

// //marriedSmriti = {};

// const smriti2 = {
//   firstName: 'smriti',
//   lastName: 'Pradhan',
//   age: 27,
//   family: ['MoM', 'DAD'],
// };
// const smritiCopy = Object.assign({}, smriti2); // only create the sallo copy not deep copy
// smritiCopy.lastName = 'Bhuyan';

// console.log('Before Marriage', smriti2);
// console.log('After Marriage', smritiCopy);

// smritiCopy.family.push('Abhishek');
// smritiCopy.family.push('Abhishek Family');

// console.log('Before Marriage', smriti2);
// console.log('After Marriage', smritiCopy);

//this key word

// ExAMPLE OF THIS
// 1. in simple function
//function expression
const funExpr = function () {
  console.log('Function Expression', this);
};

funExpr();
//funnction declaration
function funDec() {
  console.log('function Declaration', this);
}
funDec();
