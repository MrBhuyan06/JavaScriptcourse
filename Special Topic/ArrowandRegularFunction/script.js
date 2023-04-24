'use strict';

const abhi = {
  firstName: 'Abhishel',
  lastName: 'Bhuyan',
  printNameFromObj: () => {
    console.log(this.firstName);
  },
};
console.log(abhi === window.abhi);
// abhi.printNameFromObj();

var x = 10;
console.log(x === window.x);

function checkTheScope() {
  var x = 'Abhishek';
  // console.log(abc);
  console.log(x === window.x);
}
// checkTheScope();
// console.log(abc);
//Let create method inside a mthod
// const vichel = {
//   companyName: 'Maruti',
//   seriesNumber: '232',
//   printModelDetails: function () {
//     console.log(this);
//     function modelNumber() {
//       console.log(`${this.seriesNumber}centroMaruti`);
//     }
//     modelNumber();
//   },
// };
// vichel.printModelDetails();
// script.js:30 Uncaught TypeError: Cannot read properties of undefined (reading 'seriesNumber')
// Why do we have end with this error as we know this keyword for normalFunction call is undefine so taking to access the properties of undefine gives an error
//solution
//1.stroring the this value into an varibale
//2.or using the nested function as a arrow function
// 1.
// const vichel = {
//   companyName: 'Maruti',
//   seriesNumber: '232',
//   printModelDetails: function () {
//     console.log(this);
//     const self = this;
//     function modelNumber() {
//       console.log(`${self.seriesNumber}centroMaruti`);
//     }
//     modelNumber();
//   },
// };
// vichel.printModelDetails();
// 2.
// const vichel = {
//   companyName: 'Maruti',
//   seriesNumber: '232',
//   printModelDetails: function () {
//     console.log(this);

//     const modelNumber = () => {
//       console.log(`${self.seriesNumber}centroMaruti`);
//     };
//     modelNumber();
//   },
// };
// vichel.printModelDetails();

// As same as this keyword anthore keyword is arguments which is also avilable in regular function call
// as we have know that in varibale enviroment arument object is get store

function addExpress(a, b, c) {
  console.log(arguments);
}
//As much as value we can pass as argument which is acumuted at arguments keyword inspite being not declared in function paramenter
addExpress(1, 2, 3);

// const addArrow = (a, b, c) => {
//   console.log(arguments);
// };
// addArrow(1, 2, 3);

//Memory Representation
// const hadJob = {
//   name: 'Abhishek',
//   job: false,
// };
// object copy

// console.log('Before copy', hadJob.job);
// const getJob = hadJob;
// getJob.job = true;
// console.log('After copy', hadJob.job);
//Basically while we copy the object it didnot create new mwmory Address it basically refresed to same memory location

// for createing different location we have method called as Object,assign
//Lets do it
const hadJob = {
  name: 'Abhishek',
  job: false,
};
console.log('Before copy', hadJob.job);
const hadJobCopy = Object.assign({}, hadJob);
hadJobCopy.job = true;
console.log('After Copy', hadJob.job);
console.log('Copy by object.assign', hadJobCopy.job);
