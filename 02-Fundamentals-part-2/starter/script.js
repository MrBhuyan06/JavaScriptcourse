"use strict";

let hasDriversLicense = false;
const passTest = true;

// let interface = "HEllo";
// console.log(interface);
if (passTest) {
  hasDriversLicense = true;
}
if (hasDriversLicense) {
  console.log("i can drive");
}

//Function

function logger() {
  console.log("My name is Abhishek");
}
// Calling  / Running / Invoking function
logger();
logger();
// fn fname(Parameter)
//fname(argument)
function fruitProcessor(apples = 2, oranges) {
  console.log(apples, oranges);
  const juice = `juice With ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
