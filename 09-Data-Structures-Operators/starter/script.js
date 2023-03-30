'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivery to ${address} at ${time} `
    );
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `HEre is your Declicious pasta with ${ing1}, ${ing2}, ${ing3})}`
    );
  },
};

restaurant.orderDelivery({
  time: '23:30',
  address: 'BBSR',
  mainIndex: 2,
  starterIndex: 2,
});

//default value
restaurant.orderDelivery({
  address: 'BBSR',

  starterIndex: 1,
});

// Destructing an object
// {} is used to destructing object

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//new name to give an prop
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

//mutating variable;
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
// { } js treated as a code block and give a exror as unexpected token
({ a, b } = obj);
console.log(a, b);

//nested destructing in obj
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// //Destructing assigment

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr); //original array is not affected

// // const [first,  second] = restaurant.categories;
// // // console.log(first, second);
// // // 1,and 3 one
// // const [first, , second] = restaurant.categories;
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // Switch Variables
// //with general swap method
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary);

// //swap using destruciong
// [secondary, main] = [main, secondary];
// console.log(main, secondary);

// const [starter, maincourse] = restaurant.order(2, 0);
// console.log(starter, maincourse);

// //nested destruning array
// const nested = [2, 4, [5, 6]];
// // console.log(nested[2][0]);
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Deafult value to variable
// const [p = 0, q = 0, r = 0] = [8, 9];
// console.log(p, q, r);

//spred operator

const arr = [7, 8, 9];

const badNewArry = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArry);

const newGoodArr = [1, 2, ...arr];
console.log(newGoodArr);

console.log(...newGoodArr);

//new mwnu
const newMenu = [...restaurant.mainMenu, 'Chicken tikka'];
console.log(newMenu);

//copy array
//salo copy
const mainMenuCopy = [...restaurant.mainMenu];
//join 2 array
const wholeMenu = [...mainMenuCopy, ...restaurant.starterMenu];
console.log(wholeMenu);

//spread operater applay in all iterable not object
//iterable:array, String, maps, sets, Not objects

const str = 'Abhihsek';
const letters = [...str, ' ', 's. '];
console.log(letters);
console.log(...str);

// const ingredients = [
//   prompt("Let's make pasta"),
//   prompt('ingredients'),
//   prompt('ingredients'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2])
// restaurant.orderPasta(...ingredients);

//since 2018spread opr is also work in object

const newRestaurant = { founingYear: 2019, ...restaurant, founder: 'Abhisek' };
console.log(newRestaurant);

//salo copy
const restaurantcopy = { ...restaurant };
restaurantcopy.name = 'Go Foodtion ';
console.log(restaurantcopy);
console.log(restaurant);
