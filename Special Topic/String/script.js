"use strict";

const airline = "Tap Air Inrdia";
const plane = "A320";

console.log(plane[0]);
console.log(Number(plane[1]));
console.log(+plane[2]);
console.log(plane[3]);
console.log(airline.length);

//Methods
console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("Inrdia"));
//slice
console.log(airline.slice(0, 4)); // not change the existing array as the string  are immutable so these , method return a new string

const checkMiddleSeat = function (seat) {
  //b and e are middle seats
  const s = seat.slice(-1);
  if (s == "C" || s == "B") {
    console.log("you Got the middle");
  }
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

const str = "Abhi is goodboy";
console.log(str.endsWith("goodboy"));
//Practice execise

//Padding

const markCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(markCreditCard("23242444254261"));
console.log(markCreditCard(11111223366272));
