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

// Array

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

//Literal Syntax
const friends = ["Michael", "Steven", "Peter"];

console.log(friends);

const year = new Array(1991, 1984, 2008, 2020);
console.log(year);

// pointing to the paticular array element
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

console.log((friends[2] = "Jay"));
console.log(friends);
// friends = ["Bob", "Alice"];
const firstName = "Abhihske";
const jonas = ["FirstName", "Bhuyan", 2023 - 2000, "student", friends];
// As [Takes Expression u have a variable that produces data]
console.log(jonas);
console.log(jonas.length);

//Exercise
function calcAge1(birthYear) {
  const age = 2037 - birthYear;
  // Number- Array (NaN)
  return age;
}
const years = [1990, 1967, 2020, 2000, 2018];

const age1 = calcAge1(years[0]);
const age2 = calcAge1(years[1]);
const age3 = calcAge1(years[2]);
console.log(age1);
console.log(age2);
console.log(age3);
// We can Have function Call in The Array
const age = [calcAge1(years[0]), calcAge1(years[1])];
console.log(age);
