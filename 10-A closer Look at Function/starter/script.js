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

const flight = 'LH234';
const abhi = {
  name: 'Abhihske Bhuyna',
  passport: 234567,
};

const chechIn = function (flightNum, passenger) {
  flightNum = 'LH9999';
  passenger.name = 'Mr.' + passenger.name;
  if (passenger.passport === 234567) {
    alert('checKIN');
  } else {
    alert('wrong passport');
  }
};
chechIn(flight, abhi);
console.log(flight);
console.log(abhi);

// is same as doing
const flightNum = flight;
const passenger = abhi;

const newPasswort = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};
newPasswort(abhi);
chechIn(flight, abhi);

//pass by value and passing in refrence
//javascript is not has passing by refrence it pasing by value but it look like passing by refrence
