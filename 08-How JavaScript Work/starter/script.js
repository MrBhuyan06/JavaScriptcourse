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

const abhi = {
  year: 1991,
  calAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },
};

abhi.calAge();

const smriti = {
  year: 2017,
};
//Method browiing
smriti.calAge = abhi.calAge;

smriti.calAge();
