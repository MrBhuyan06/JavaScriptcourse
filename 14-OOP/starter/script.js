'use strict';

const Person = function (firstName, birthYear) {
  //   console.log(this);
  //instance prototype
  this.firstName = firstName;
  this.birthYear = birthYear;
  //never create the methods inside of a constructor function
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
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

//protypes
// console.log(Person);

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};
Abhishek.calcAge();
Gudu.calcAge();
console.log(Abhishek.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(Abhishek));
//prototypeOFLinked Obj

Person.prototype.species = 'Homies';
console.log(Abhishek, Gudu);
console.log(Abhishek.hasOwnProperty('firstName'));
console.log(Abhishek.hasOwnProperty('species'));

console.log(Abhishek.__proto__);
console.log(Abhishek.__proto__.__proto__);
console.log(Abhishek.__proto__.__proto__.__proto__);
//Array
console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 56, 6, 4, 65, 43];
// new Array===[]
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__);
console.dir(arr.__proto__.__proto__.constructor);
Array.prototype.uinque = function () {
  return [...new Set(this)];
};
console.log(arr.uinque());

const h1 = document.querySelector('h1');
console.log(h1.__proto__.__proto__);
console.dir(x => x + 1);

//practice
const Student = function (name, reg) {
  this.name = name;
  this.reg = reg;
};

const Abhi = new Student('Abhishek', 210720100102);
console.log(Abhi);
const Gudus = new Student('Gudu', 210720100100);
Student.prototype.details = function () {
  console.log(`Hi ${this.name} and your reg is ${this.reg}`);
};

Abhi.details();
Gudus.details();
console.log(Abhi instanceof Student);
console.log(Abhi.__proto__ === Student.prototype);
// console.log(Abhi.hasOwnProperty('details'));
console.dir(Student.prototype.isPrototypeOf(Abhi));

// console.log(Array.prototype.__proto__.__proto__);
Array.prototype.displayName = function (name) {
  console.log('Your Name is', name);
};

const arrs = [2, 32, 31244, 321, 32];
console.log(arrs.__proto__.__proto__.__proto__);
//Make a arrs in the Array in the

arr.displayName('Abhi');

// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
