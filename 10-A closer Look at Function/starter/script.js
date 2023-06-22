'use strict';

// const bookings = [];
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 188 * numPassengers
// ) {
//   // ES5
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 199;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };
// createBooking('Lh123');
// createBooking('LH1234', 2, 800);
// createBooking('LH1234', undefined, 800);
// console.log(bookings);

// const flight = 'LH234';
// const abhi = {
//   name: 'Abhihske Bhuyna',
//   passport: 234567,
// };

// const chechIn = function (flightNum, passenger) {
//   flightNum = 'LH9999';
//   passenger.name = 'Mr.' + passenger.name;
//   if (passenger.passport === 234567) {
//     alert('checKIN');
//   } else {
//     alert('wrong passport');
//   }
// };
// chechIn(flight, abhi);
// console.log(flight);
// console.log(abhi);

// // is same as doing
// const flightNum = flight;
// const passenger = abhi;

// const newPasswort = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// };
// newPasswort(abhi);
// chechIn(flight, abhi);

//pass by value and passing in refrence
//javascript is not has passing by refrence it pasing by value but it look like passing by refrence

// let myName = 'Abhishek';
// const changeName = function (myName) {
//   myName = 'AbhihskeBhuyna';
//   console.log(myName);
// };
// console.log(myName);
// changeName(myName);
// console.log('Hemmlo', myName);

// //first class and higher order functions
// //create a own higher order function
// const oneWord = function (str) {
//   return str.replaceAll(' ', '').toLowerCase();
// };
// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   console.log(others);
//   console.log('hello', ...others);
//   console.log([first.toUpperCase(), ...others].join(' '));
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //HigherOther function
// const transformer = function (str, fn) {
//   console.log(`Transformer: ${fn(str)}`);
//   console.log(`Transformer: ${str}`);
//   console.log(`Transformer by ${fn.name}`);
// };

// transformer('JavaScript is the best', upperFirstWord);
// transformer('JavaScript is the best', oneWord);

// const greets = function () {
//   return 'Namaster';
// };

// const welcomeMessage = name => {
//   let greet = greets();
//   return name + greet;
// };
// console.log(welcomeMessage('abhi'));

// // Questin demostrated the higher order function
// // made a fucntion which take a str as input produce the single world
// const oneWord2 = function (str) {
//   return str.replaceAll(' ', '').toLowerCase();
// };

// //made a function which take a str as input and transform the str
// //as Abhishek Bhuyna
// // outout ABHISHEK bhuyna
// const changeStr = function (str) {
//   const [first, ...second] = str.split(' ');
//   return [first.toUpperCase(), ...second].join(' ');
// };

// const tranformer = function (str, fn) {
//   console.log('str before Applay Method');
//   console.log(
//     `Str and this is done by functionName ${fn.name} aftre Applay Method ${fn(
//       str
//     )}`
//   );
// };

// tranformer('Abhi bhuyna', oneWord2);
// tranformer('Abhi bhuyna', changeStr);
// tranformer('Abhi bhuyna', changeStr);

// // Function return anthore function

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const GreetHey = greet('Hey');
// console.log(GreetHey);
// GreetHey('Abhihske');
// GreetHey('Smriti');

// const greet = greeting => {
//   return name => {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greetHey = greet('hey');
// greetHey('Abhi');

// // Call and Applay method
// const airIndia = {
//   airline: 'airIndiaJet',
//   alcode: 'AIT',
//   Booking: [],
//   book(seatNum, passengerName) {
//     console.log(
//       `${passengerName} book a set on ${this.airline} flight ${this.alcode}`
//     );
//     this.Booking.push({
//       flight: `${this.airline}${this.alcode}`,
//       name: passengerName,
//     });
//   },
// };
// const airAsisa = {
//   airline: 'airAsisa',
//   alcode: 'AS',
//   Booking: [],
// };

// airIndia.book(212, 'Abhishek Bhuyan');

// // Storing the method refrence into individual Variabl
// const book = airIndia.book;
// // console.log(book);

// //As we know this variable is dyanamic this value is basically depends how the function is called as here this is just a normal function call so in normal function call this is belong to the undefine as strict mode
// // book(2121, 'Smriti Pradhan');
// // So what we can do for this

// book.call(airAsisa, 212, 'Smriti Pradhan');

// const airUk = {
//   airline: 'airUk',
//   alcode: 'AS',
//   Booking: [],
// };

// const callArgument = [232, 'Satabdi Gadhai'];
// book.apply(airUk, callArgument);
// //  Or the moderm way to do so is very easy
// book.call(airAsisa, ...callArgument);

// //bind method
// const airBrazil = {
//   airline: 'airBrazil',
//   alcode: 'AB',                   
//   Booking: [],
// };
// const airBrazilBook = book.bind(airBrazil, 23);
// console.log(airBrazilBook);
// airBrazilBook('subham');
// console.log(airBrazil.Booking);
//practial Appication
//this mean  pass one argument to the function call before the the atcul
// // call made

// //Passing all the parameter in the bind method
// const airBrazilBook = book.bind(airBrazil, 23, 'abhi');

// airBrazilBook();
// console.log(airBrazil.Booking);

// // With Event Listeners
// airBrazil.planes = 300;
// airBrazil.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };
// // lufthansa.buyPlane();

// document
//   .querySelector('.buy')
//   .addEventListener('click', airBrazil.buyPlane.bind(airBrazil));

// // Partial application
// const addTax = (rate, value) => value + value * rate;

// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);

// // addVat= value= value + value * 0.23
// console.log(addVAT(100));
// console.log(addVAT(23));

// // As think using a  function calling anthore function
// const addTAX2 = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// const addVAT2 = addTAX2(0.23);
// console.log(addVAT2);
// console.log(addVAT2(00));

//IIFE
// Immediaately invoked function expression
// IN this way we can runa function for one time and not execute in futre or disapper

// Function statement
function runOnce() {
  console.log('functin run  once function statement');
}

//Function expression
(function () {
  console.log('runn once imediately');
  const privates = '23';
})();
// console.log(privates);
//Arrow Function
(() => {
  console.log('run once arrow function');
})();
//iife is may use for dataprotection or privacy but in mofern js it is not use for data protecttion
//because of the block scope

{
  const isPrivate = 23;
  var odd = 23;
}
// console.log(isPrivate);
console.log(odd);

//closure
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passenger`);
  };
};
const booker = secureBooking();
booker();
booker();
booker();
console.dir(booker);

// more exaple in closure

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
console.dir(f);

h();
f();

console.dir(f);
// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`we are boarding all ${n} passengers`);
    console.log(`There are 3 groups , each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);
