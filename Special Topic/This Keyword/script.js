'use strict';
// case-1 This Concept
//if we are using this in the global scope it will return as window object as global object
console.log(this);
//Window object
//Case-2 While using normal function or function expression
// if we are using the strict mode then the value of the arrow is belong to undefine if no strict is using then window object

//Normal Function
function printNormalFunction() {
  console.log(this);
}
printNormalFunction();
//undefine

const functionExpress = function () {
  console.log(this);
};
functionExpress();
//undefine

// Method inside the object there this
const abhishek = {
  name: 'Abhishek',
  calAge: function () {
    console.log(this);
  },
};
abhishek.calAge();
//object on which the method is being called
//Same object where in the method place we are going to use the arrow function
const gudu = {
  name: 'gudu',
  calAge: () => {
    console.log('Arrow', this);
  },
};
gudu.calAge();
//As window As the hexical parent is global scope
//Example Normal function contain the arrow function
const printHexcialValueOfThis = function () {
  const HexcialArrowFunction = () => {
    console.log(this);
  };
  HexcialArrowFunction();
};
printHexcialValueOfThis();
//as undefine hexical parent is printHexcialValueOfThis and whose value is undefine
