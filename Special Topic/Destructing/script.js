// 'use strict';

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   // openingHours,
//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     address,
//   }) {
//     console.log(
//       `Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivery to ${address} at ${time} `
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(
//       `HEre is your Declicious pasta with ${ing1}, ${ing2}, ${ing3})}`
//     );
//   },
//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     if (otherIngredients.length == 0) {
//       console.log(
//         `oops sorry We cant processed with your other as u have not given otherIngredients details`
//       );
//     } else {
//       console.log(`Thank you odering from us Your pizza is on the way`);
//     }
//   },
// };

// //Default value to the destructing varibale
// const { menu = [], starterMenu: starter = [] } = restaurant;
// console.log(menu, starter);

// //Destrucing basicallly it mean to assign an object key or array element to different indivual values
// // const arrayOfResturent = [
// //   {
// //     data: {
// //       name: 'GoFoodtin',
// //       address: 'sundarpad',
// //       rating: '4star',
// //     },
// //   },
// //   {
// //     data: {
// //       name: 'GoFoodtin1',
// //       address: 'sundarpad1',
// //       rating: '4star1',
// //     },
// //   },
// //   {
// //     data: {
// //       name: 'GoFoodtin2',
// //       address: 'sundarpad2',
// //       rating: '4star2',
// //     },
// //   },
// // ];
// // console.log(arrayOfResturent[0].data);
// // {name: 'GoFoodtin', address: 'sundarpad', rating: '4star'}

// // function toPrintRestuarentDetails({ name: Name, rating: Rating }) {
// //   // console.log(prop);
// //   console.log(Name, Rating);
// // }
// // toPrintRestuarentDetails({ ...arrayOfResturent[0].data });
// // console.log({ ...arrayOfResturent[0].data });
// // console.log(arrayOfResturent[0].data);

// // function printCardetails([name, model, color]) {
// //   console.log(name, model, color);
// // }
// // //withOutUsing[]
// // function printCardetailsBarket(name, model, color) {
// //   console.log(name, model, color);
// // }
// // function printCardetailsAcceptArgumetKeywrd() {
// //   // console.log(name, model, color);
// //   console.log('1', arguments);
// //   const [name, model, color] = arguments;
// //   console.log(name, model, color);
// // }
// // {

// // }

// let datas = [];
// const arrayOfCarDetails = [
//   ['car', (datas = ['maruti', '1123', 'red'])],
//   ['car', (datas = ['nissan', '1023', 'black'])],
//   ['car', (datas = ['tata', '1103', 'white'])],
//   ['car', (datas = ['mahindra', '1093', 'brown'])],
// ];
// // printCardetails(arrayOfCarDetails[0][1]);
// // printCardetailsBarket(...arrayOfCarDetails[0][1]);
// // printCardetailsAcceptArgumetKeywrd(...arrayOfCarDetails[0][1]);
// // console.log(arrayOfCarDetails[0][1]);
// // console.log(...arrayOfCarDetails[0][1]);

// //Mutating an avraible
// let a = 11;
// let b = 22;
// const obj = {
//   a: 22,
//   b: 34,
//   c: 34,
// };
// console.log(a, b);
// ({ a, b } = obj);
// console.log(a, b);

// //Nested object destruing
// const gymWeekendOpingHours = {
//   sat: {
//     moring: '6-10',
//     eve: '7-9',
//   },
//   sun: {
//     moring: '6-10',
//     eve: '7-9',
//   },
// };

// const {
//   sat: { moring, eve },
// } = gymWeekendOpingHours;
// console.log(moring, eve);
// //in array
// const array = [1, 2, [23, 34]];
// const [, , [c, d]] = array;
// console.log(c, d);

// const tities = ['bhuyan', 'pandas', 'mohanty'];
// const [abhiTittl, , babulu] = tities;
// console.log(abhiTittl, babulu);
// //Nested Destructing
// const number = [1, 2, 3, [2, 4, 5]];
// const [, , , [aa, bb, cc]] = number;
// console.log(aa, bb, cc);
// //Object destructing
// const arrayOfResturent = [
//   {
//     data: {
//       names: 'GoFoodtin',
//       address: 'sundarpad',
//       rating: '4star',
//     },
//   },
//   {
//     data: {
//       name: 'GoFoodtin1',
//       address: 'sundarpad1',
//       rating: '4star1',
//     },
//   },
//   {
//     data: {
//       name: 'GoFoodtin2',
//       address: 'sundarpad2',
//       rating: '4star2',
//     },
//   },
// ];
// const { names, address, rating } = arrayOfResturent[0].data;
// console.log(names);
// const count = {
//   one: 1,
//   two: 2,
//   three: {
//     name: 3,
//   },
// };

// const {
//   three: { name },
// } = count;
// console.log(name + 'hello');

// let leg = 36;
// let cheast = 23;
// [cheast, leg] = [leg, cheast];
// console.log(cheast, leg);

// const restuarent = {
//   resName: 'Go Foodition',
//   address: 'BBSR',
//   priceForTwo: '300',
//   AvgRating: 4.4,
// };

// const array1 = [1, 3, 4];
// for (let [index, ele] of array1.entries()) {
//   console.log(`index ${index} and element ${ele}`);
// }

// const carData = [
//   {
//     type: '4 wheeler',
//     data: {
//       name: 'BMW',
//       color: 'red',
//       model: {
//         modeltype: 0,
//       },
//     },
//   },
//   {
//     type: '4 wheeler',
//     data: {
//       0: 'zero',
//       name: 'ferari',
//       color: 'red',
//     },
//   },
//   {
//     type: '4 wheeler',
//     data: {
//       name: 'mercedes',
//       color: 'red',
//     },
//   },
// ];
// console.log(carData[0].data.model.modeltype ?? 'model has no type');

// const user = {
//   name: 'John Doe',
//   age: 30,
//   regular: [
//     {
//       name: 'abhi',
//     },
//   ],
// };
// const [people] = user.regular;
// console.log(people.name);

// ab = 10;
// let bc = 10;
// // console.log(ab);
// // console.log(window === this);
// // console.log(window.ab === ab);
// // console.log(window.ab);
// console.log(bc);
// console.log(window === this);
// console.log(window.bc === bc);
// console.log(window.bc);

// function test() {
//   ba = 10;
// }
// console.log(this.ba);
