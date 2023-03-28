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

function calAge(birthYear) {
  const age = 2023 - birthYear;
  function printAge() {
    let outPut = ` ${firstName}You are ${age}, born in ${birthYear}`;
    console.log(outPut);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //Creating New Variable as a same name as outer Scope's variable
      const firstName = 'Bhuyan';
      //Reassing Outer Scope's Variable
      outPut = 'New Output';
      const str = `oh, and you are a millenial,${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
    }

    // console.log(str);
    console.log(millenial);
    console.log(outPut);
    // console.log(add(2, 3)); //function are called block level  scope in strict mode
  }
  printAge();
  return age;
}

//global Variable
const firstName = 'Abhi';
calAge(1991);

//Hoisting
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Abhi';
let job = 'Student';
const year = 2000;

//function

console.log(addDel(2, 3));
console.log(addE(2, 3));
console.log(addDel(2, 3));

function addDel(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = () => a + b;
