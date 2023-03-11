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

// const firstName = "Abhihske";
// const job = "coder";
// const age = 23;
// const year = 2037;
// const Abhishek =
//   "I' am " + firstName + ", A " + (year - age) + " year old" + job + "!";
// console.log(Abhishek);

// const abhiNew = `I' am ${firstName} , A ${year - age} year old ${job}!`;
// console.log(abhiNew);

// console.log(`Just A rgular String...`);
// console.log(
//   "string with \n\
// multiple line \n\
// "
// );
// console.log(`String
// multiline
// string
// `);

// // If and else statement

// const legalage = 12;
// const isOldEnough = legalage >= 18;
// if (isOldEnough) {
//   console.log("He is legal to Drive 🚘");
// } else {
//   const leftYear = 18 - legalage;
//   console.log(`
//   Opps Abhi is too Young . waith another ${leftYear} years`);
// }

// const birthYear = 20150;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// // Type conversion and coercion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(+inputYear + 18);
// // OR
// console.log(Number(inputYear) + 18);
// console.log(Number("1991"));
// console.log(String(23), 23);
// console.log(23 + "", 23);

// // type coercion
// console.log("iam" + 23 + "years old");
// console.log("20" - "10" - 3);
// console.log("20" * "2");
// console.log("20" / "2");

// // guess the ouput

// let n = "1" + 1;
// n = n - 1;
// console.log(n); // Output 10

// // truthy and falsy value

// // js there is 5 fasly value 0,'',undefine, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(""));
// console.log(Boolean("abhi"));
// console.log(Boolean(NaN));
// console.log(Boolean(null));

// const money = 100;

// if (money) {
//   console.log("Don't spend it alll;");
// } else {
//   console.log("You Should get a job");
// }

// let height = 0;
// if (height) {
//   console.log("Hey height is define");
// } else {
//   console.log("Height is undefine");
// }

// // equality operator;
// // Strict operater
// // const ages = 18;
// // if (ages === 18) {
// //   console.log(`You Just an adult`);
// // } else {
// //   console.log("You Are a under age");
// // }

// // Losely equil
// const ages = "18";
// if (ages == 18) {
//   console.log(`You Just an adult`);
// } else {
//   console.log("You Are a under age");
// }

// let favNumber = Number(prompt("What's Your Favourite Number"));
// console.log(favNumber);

// if (favNumber === 23) {
//   // '23' from prompt is type coersion and i compare to 23 number
//   console.log("Cool! 23 is an amazing number");
// } else if (favNumber === 7) {
//   console.log("7 is also a Cool Number");
// } else if (favNumber === 9) {
//   console.log("9 is also a Cool Number");
// } else {
//   console.log("Number is no 7 and 23");
// }

// // different operator or not equal to operato
// if (favNumber !== 23) {
//   console.log("why not to try 23");
// }

// Boolean Logic
// Logical Operator
/**
 * And &&
 * or ||
 * Not !12
 */

const hasDriverLicense = true;
const hasGoodVision = true;
console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);
console.log(!hasDriverLicense || hasGoodVision);

const shouldDrive = hasDriverLicense && hasGoodVision;

if (shouldDrive) {
  console.log("Smriti Is Able to drive");
} else {
  console.log("Some else should is to drive");
}

const isTried = true;
console.log(hasDriverLicense || hasGoodVision || isTried);

if (hasDriverLicense && hasGoodVision && isTried) {
  console.log("Not good for driving");
} else {
  console.log("Good for drive");
}
// Switch Statements

const day = "monday";

switch (day) {
  case "monday": // day as key== case as pair
    console.log("JavaScript");
    console.log("Go to Coding MeetUp");
    break;
  case "tuesday":
    console.log("prepare theory video");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code example");
    break;
  case "friday":
    console.log("record Video");
    break;
  case "saturday":
  case "sunday":
    console.log("enjoy the weekend");
    break;
  default:
    console.log("Not a valid Day !");
}

if (day === "monday") {
  console.log("JavaScript");
  console.log("Go to Coding MeetUp");
} else if (day === "tuesday") {
  console.log("prepare theory video");
} else if (day === "wednesday" || day === "thrusday") {
  console.log("Write code example");
} else if (day === "friday") {
  console.log("record a Video");
} else if (day === "sturday" || day === "sunday") {
  console.log("Its A Weekend");
} else {
  console.log("Not a vaid Day");
}

// Statement And Expressions

// An expression is somethink which Produce a value
// 12+3
// 1991
// true && false && !false

// An stament is somethink which is a bigger piece of code that executed that didnot produce a value  is perform a action

if (23 >= 10) {
  const str = "23 is bigger";
}
