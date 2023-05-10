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

let myName = 'Abhishek';
const changeName = function (myName) {
  myName = 'AbhihskeBhuyna';
  console.log(myName);
};
console.log(myName);
changeName(myName);
console.log('Hemmlo', myName);

//first class and higher order functions
//create a own higher order function
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//HigherOther function
const transformer = function (str, fn) {
  console.log(`Transformer: ${fn(str)}`);
  console.log(`Transformer: ${str}`);
  console.log(`Transformer by ${fn.name}`);
};

transformer('JavaScript is the best', upperFirstWord);
transformer('JavaScript is the best', oneWord);
