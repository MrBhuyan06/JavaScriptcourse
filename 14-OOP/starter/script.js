'use strict';

const Person = function (firstName, birthYear) {
  //   console.log(this);
  //instance prototype
  this.firstName = firstName;
  this.birthYear = birthYear;
  //never create the methods inside of a constructor function
  this.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
};
const Abhishek = new Person('Abhihske', 2000);
console.log(Abhishek);
const Gudu = new Person('gudu', 2001);
console.log(Gudu);
console.log(Abhishek instanceof Person);

//1.New empty obj is created
//2. function is called, this={is set to newly created obj}
//3.link to the Prototype
//4.function automatically return that empty obj in the being
