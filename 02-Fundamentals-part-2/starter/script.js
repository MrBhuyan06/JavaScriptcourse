// "use strict";

// let hasDriversLicense = false;
// const passTest = true;

// // // let interface = "HEllo";
// // // console.log(interface);
// if (passTest) {
//   hasDriverLicense = true;
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

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   // console.log(apples, oranges);
//   const juice = `juice With ${applePieces} apples and ${orangePieces} oranges`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calAge = function (birthYeah) {
//   return 2037 - birthYeah;
// };

// const yearsUntilRetirement = function (birthyeah, firstName) {
//   const currentAge = calAge(birthyeah);
//   const retirement = 65 - currentAge;

//   if (retirement > 0) {
//     console.log(`${firstName}`);
//     return `${firstName} retires in ${retirement}`;
//   } else {
//     console.log(`${firstName}`);
//     return -1;
//   }
// };

// console.log(yearsUntilRetirement(1970, "Abhishek"));

// // Array

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// //Literal Syntax
// const friends = ["Michael", "Steven", "Peter"];

// console.log(friends);

// const year = new Array(1991, 1984, 2008, 2020);
// console.log(year);

// // pointing to the paticular array element
// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// console.log((friends[2] = "Jay"));
// console.log(friends);
// // friends = ["Bob", "Alice"];
// const firstName = "Abhihske";
// const jonas = ["FirstName", "Bhuyan", 2023 - 2000, "student", friends];
// // As [Takes Expression u have a variable that produces data]
// console.log(jonas);
// console.log(jonas.length);

// //Exercise
// function calcAge1(birthYear) {
//   const age = 2037 - birthYear;
//   // Number- Array (NaN)
//   return age;
// }
// const years = [1990, 1967, 2020, 2000, 2018];

// const age1 = calcAge1(years[0]);
// const age2 = calcAge1(years[1]);
// const age3 = calcAge1(years[2]);
// console.log(age1);
// console.log(age2);
// console.log(age3);
// // We can Have function Call in The Array
// const age = [calcAge1(years[0]), calcAge1(years[1])];
// console.log(age);

// Array Method

// const friends = ["Michael", "Steven", "Peter"];
// const newLenght = friends.push("jay"); // return the new Array Length
// console.log(friends);
// console.log(newLenght);
// // Attached to the end of the Array

// // Add Element to the being
// friends.unshift("John"); // return the Length of the new Array
// console.log(friends);

// // Remove Element form the last position
// console.log(`Before Pop ${friends}`);
// const popElement = friends.pop(); // return pop Element
// console.log(popElement);
// console.log(friends);
// console.log(`After Pop ${friends}`);

// //Remove Element form Starting postion
// console.log(`Before Shit ${friends}`);
// const shiftElement = friends.shift(); // return shift Element
// console.log(shiftElement);
// console.log(`After Shift ${friends}`);

// //indexOf or postion of the element

// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("bob")); // return -1

// // include moderm es6 methods return Boolean values
// console.log(friends.includes("Steven"));
// console.log(friends.includes("Bob"));

// if (friends.includes("Peter")) {
//   console.log("you have a friend called Peter");
// }

// Object
// object Literal
// const Abhi = {
//   firstName: "Abhihske",
//   lastName: "Bhuyan",
//   age: 2023 - 2000,
//   job: "Student",
//   friends: ["Abhihske", "Gudu", "Danny"],
//   carrer: {
//     10: "Stewart",
//     12: "Stewart",
//     13: "Cutm",
//     UG: "Cutm",
//   },
// };
// console.log(Abhi);

// // Access Data From the Object 2 way
// // 1.Dot Notation
// console.log(Abhi.lastName);
// // Barcket Notation
// // [inside this we put the expres]
// const nameKey = "Name";
// console.log(Abhi["firstName"]);

// // console.log(Abhi["fistName" + nameKey]);
// console.log(Abhi["first" + nameKey]);

// const interestIn = prompt(
//   "What do you wan to About Abhi choose between firstName,LastName,age, Job and Friend"
// );
// console.log(interestIn);
// // console.log(Abhi.interestIn); // undefine

// if (Abhi[interestIn]) {
//   console.log(Abhi[interestIn]); //
// } else {
//   console.log(
//     "Wrong Request What do you wan to About Abhi choose between firstName,LastName,age, Job and Friend"
//   );
// }

// Abhi.location = "India";
// Abhi["twitter"] = "@abhi06Bhuyna";

// console.log(Abhi);

// // challenge
// // "Abhi Has 3 friend and his best freind is gudu" Dynamically
// console.log(
//   `Abhi has ${Abhi.friends.length} and his best friend is ${Abhi.friends[0]}`
// );

// Object Method

// const Abhi = {
//   firstName: "Abhihske",
//   lastName: "Bhuyan",
//   birthYeah: 2000,
//   hasDrivingLicence: false,
//   job: "Student",
//   friends: ["Abhihske", "Gudu", "Danny"],
//   carrer: {
//     10: "Stewart",
//     12: "Stewart",
//     13: "Cutm",
//     UG: "Cutm",
//   },
//   // calcAge: function () // function Values
//   // {
//   //   console.log(this);
//   //   return 2023 -birthYeah;
//   // },

//   // calcAge: function () // function using Thid
//   // {
//   //   console.log(this);
//   //   return 2023 - this.birthYeah;
//   // },
//   calcAge:
//     function () // function using this and strore the result in the new property
//     {
//       console.log(this);
//       this.age = 2023 - this.birthYeah;
//       return this.age;
//     },
//   getSummary: function () {
//     return `               First Name:${this.firstName}
//                lastName:${this.lastName}
//                job:${this.job}
//                Adult:${this.hasDrivingLicence}
//                carrer:${this.carrer.UG}`;
//   },
//   getSummary2: function () {
//     return `${this.firstName} is a ${this.age} year old ${this.job} and ${
//       this.hasDrivingLicence
//         ? "he has driving license "
//         : "he has no driving lincense"
//     }`;
//   },
// };
// console.log(Abhi.calcAge());
// // console.log(Abhi["calcAge"]());
// console.log(Abhi.age);
// // challenges to define a method in object as get summarry and retrun a summary String
// //"Abhi i s A 46 -year Old teacher , and he has a driver license"
// console.log(Abhi.getSummary());
// console.log(Abhi.getSummary2());

// //iteration

// // console.log("Lifing weight repetition 1🤸 ");
// // console.log("Lifing weight repetition 2🤸 ");
// // console.log("Lifing weight repetition 3🤸 ");
// // console.log("Lifing weight repetition 4🤸 ");
// // console.log("Lifing weight repetition 5🤸 ");
// // console.log("Lifing weight repetition 6🤸 ");
// // console.log("Lifing weight repetition 7🤸 ");
// // console.log("Lifing weight repetition 8🤸 ");
// // console.log("Lifing weight repetition 9🤸 ");
// // console.log("Lifing weight repetition 10🤸 ");

// //For loop  keep ruuning while the condition is true
// for (let rep = 1; rep <= 10; rep++) {
//   if (rep >= 5) {
//     console.log(`Lifing weight repetition ${rep}🤸`);
//   }
// }

// // Loop Through

// const abhiArray = [
//   "Abhihske",
//   "Bhuyan",
//   2023 - 2000,
//   "Student",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];

// console.log(abhiArray[0]);
// console.log(abhiArray[1]);
// console.log(abhiArray[2]);

// const types = [];
// for (let i = 0; i < abhiArray.length; i++) {
//   console.log(abhiArray[i], typeof abhiArray[i]);
//   //Filling types Array
//   // types[i] = typeof abhiArray[i];
//   types.push(typeof abhiArray[i]);
// }
// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2023 - years[i]);
// }
// console.log(ages);

// // contiues and break Statement

// for (let i = 0; i < abhiArray.length; i++) {
//   if (typeof abhiArray[i] !== "string") continue;

//   console.log(abhiArray[i], typeof abhiArray[i]);
//   //Filling types Array
//   // types[i] = typeof abhiArray[i];
//   // types.push(typeof abhiArray[i]);
// }

// //break
// console.log("-BREAK With NUMBER");
// for (let i = 0; i < abhiArray.length; i++) {
//   if (typeof abhiArray[i] === "number") break;

//   console.log(abhiArray[i], typeof abhiArray[i]);
// }

// Looping BackWards And Loops In Loops

// const abhiArray = [
//   "Abhihske",
//   "Bhuyan",
//   2023 - 2000,
//   "Student",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];

// 0, 1, 2, 3
//4,3,2,1

// for (let i = abhiArray.length - 1; i >= 0; i--) {
//   console.log(i, abhiArray[i]);
// }

// loop inside a loop

// for (let excersie = 1; excersie < 4; excersie++) {
//   console.log(`-------Starting exercise ${excersie}`);
//   for (let rep = 1; rep <= 5; rep++) {
//     console.log(`Lifthing weight repetition ${rep}`);
//   }
// }

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`FOR LOOP:- Lifing weight repetition ${rep}🤸`);
// }

// While Loop

// let count = 1;
// while (count <= 10) {
//   console.log(`WHILE-:Lifting weight repetition ${count}🤸`);
//   count++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// // console.log(dice);

// while (dice !== 6) {
//   console.log(`You rooled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   console.log(dice);
//   if (dice === 6) console.log("Loop is about to end");
// }
