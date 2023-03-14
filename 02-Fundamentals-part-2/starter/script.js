// "use strict";

// let hasDriversLicense = false;
// const passTest = true;

// // let interface = "HEllo";
// // console.log(interface);
// if (passTest) {
//   hasDriversLicense = true;
// }
// if (hasDriversLicense) {
//   console.log("i can drive");
// }

// //Function

// function logger() {
//   console.log("My name is Abhishek");
// }
// // Calling  / Running / Invoking function
// logger();
// logger();
// // fn fname(Parameter)
// //fname(argument)

// // This method is function declartion
// function fruitProcessor(apples = 2, oranges) {
//   console.log(apples, oranges);
//   const juice = `juice With ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// //Function declartion
// function calcAge1(birthYear) {
//   const age = 2037 - birthYear;
//   return age;
// }
// const age1 = calcAge1(2000);
// console.log(age1);

// //Function Expression

// const calcAge2 = function (birthYeah) {
//   return 2037 - birthYeah;
// };
// console.log("Hello", calcAge2(2000));
// const age2 = calcAge2(2000);
// console.log(age2);

// // Arrow Function
// // 1. parameter and and return just line of code
// const calsAge3 = (birthyeah) => 2037 - birthyeah;

// const age3 = calsAge3(2000);
// console.log(age1, age2, age3);

// const yearsUntilRetirement = (birthyeah, firstName) => {
//   const currentAge = 2037 - birthyeah;
//   const retirement = 65 - currentAge;
//   return `${firstName} retires in ${retirement}`;
// };
// console.log(yearsUntilRetirement(1991, "Abhihske"));
// console.log(yearsUntilRetirement(2000, "Mr Bhuyan"));

// // Arrow function didnot get this keyWord

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  // console.log(apples, oranges);
  const juice = `juice With ${applePieces} apples and ${orangePieces} oranges`;
  return juice;
}

console.log(fruitProcessor(2, 3));

const calAge = function (birthYeah) {
  return 2037 - birthYeah;
};

const yearsUntilRetirement = function (birthyeah, firstName) {
  const currentAge = calAge(birthyeah);
  const retirement = 65 - currentAge;

  if (retirement > 0) {
    console.log(`${firstName}`);
    return `${firstName} retires in ${retirement}`;
  } else {
    console.log(`${firstName}`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1970, "Abhishek"));
