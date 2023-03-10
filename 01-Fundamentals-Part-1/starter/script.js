// let js = "Amazing";
// console.log(40 + 60);

// // Value
// console.log("Abhi");
// console.log(23);
// // To store in variable to use them Again And again

// let firstName = "Abhishek";
// console.log(firstName);

// // convaction  and rule to Declar a variable
// /**
//  * CamelCase to write a variable name ex firstName it is Convenction
//  * Hard Rule
//  * let 3yaer; error syntaxerror invalid token
//  * variable can only contain letter, _ and number or dollarsign
//  * start with $ can be possible
//  * Cant start With Number and _
//  * Reverse word Cant be use as variable word like fucntion
//  * To Write The Const Value we use As capital Letter
//  * ex let PI=3.141
//  * Write a descriptive variable name
//  */
// let dollar = "Dollar";
// console.log(dollar);
// let abhihshek_bhuyna = "Ab";

// let $function = 27;
// let PI = 3.141;

// let myFirstJob = "Programmer";
// let mySecondJob = "teacher";

// // Data Types

// /**
//  * Number age 23.09 and 23
//  * string let firstName="Abhihske" or 'Abhihske'
//  * Boolean true or false
//  * Undefine empty Value let childer;
//  * Null Also Mean Empty Value;
//  * Symbol value is unique and cannot change es2015
//  * BigInt es2020
//  * Dynamic Typing
//  */

// let javaScriptIsFun = true;
// console.log(typeof javaScriptIsFun);
// // This define in js vaue has a dataType not the variable
// console.log(typeof 23);
// console.log(typeof "String");

// //Dynamic type
// javaScriptIsFun = "yes!";
// console.log(typeof javaScriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(year);
// console.log(typeof year);

// //Error in type of BAsically it is a bug

// console.log(typeof null);

// //Let const var

// let age = 30;
// age = 32;
// // we mutaed the age variable or reaccing to the Variable

// const birthYear = 2000;
// // birthYear = 2002;
// //Error TypeError
// // This is imutable variable
// // const myjob; syntaxError

// var work = "Programmer";
// work = "coder";

// lastName = "Abhihsek";
// console.log(lastName);
// //it is Possible
// console.log(typeof lastName);

// Basic Operater
// Arthimatic operator

// const now = 2037;

// const ageAbhi = now - 2000;
// const ageSmriti = now - 2001;
// console.log(ageAbhi, ageSmriti);

// console.log(ageAbhi * 2, ageSmriti / 2, 2 ** 3);
// // 2 ** 3 means 2 to the power 3=2*2*2

// const firstName = "Abhihske";
// const lastName = "Bhuyan";
// console.log(firstName + " " + lastName);

// // Assigmental Operater
// /**
//  * let x=2+3;
//  */
// let x = 2 + 3;
// console.log(x);
// x += 10; //x=x+10
// x *= 10; //x=x+10
// x /= 10; //x=x+10
// x -= 10; //x=x+10
// x++; // x=x+1
// x--; //x=x-1
// --x; //x=x-1
// ++x;
// console.log(x);

// //comparision operater

// console.log(ageAbhi > ageSmriti);
// // >,<, <=,>=,
// console.log(ageAbhi >= 37);

// const isFullAge = ageAbhi >= 37;

// console.log(now - 2000 >= now - 2001);
// //Operater Precedence
// console.log(25 - 10 - 23);
// let y, z;
// y = z = 25 - 10 - 5;
// console.log(y, z);

// const avgAge = (ageAbhi + ageSmriti) / 2;
// console.log(ageAbhi, ageSmriti, avgAge);

// Template Literals

const firstName = "Abhihske";
const job = "coder";
const age = 23;
const year = 2037;
const Abhishek =
  "I' am " + firstName + ", A " + (year - age) + " year old" + job + "!";
console.log(Abhishek);

const abhiNew = `I' am ${firstName} , A ${year - age} year old ${job}!`;
console.log(abhiNew);

console.log(`Just A rgular String...`);
console.log(
  "string with \n\
multiple line \n\
"
);
console.log(`String
multiline
string
`);

// If and else statement

const legalage = 12;
const isOldEnough = legalage >= 18;
if (isOldEnough) {
  console.log("He is legal to Drive 🚘");
} else {
  const leftYear = 18 - legalage;
  console.log(`
  Opps Abhi is too Young . waith another ${leftYear} years`);
}

const birthYear = 20150;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
