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
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    if (otherIngredients.length == 0) {
      console.log(
        `oops sorry We cant processed with your other as u have not given otherIngredients details`
      );
    } else {
      console.log(`Thank you odering from us Your pizza is on the way`);
    }
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

// // Destructing an object
// // {} is used to destructing object

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// //new name to give an prop
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starter = [] } = restaurant;
// console.log(menu, starter);

// //mutating variable;
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// // { } js treated as a code block and give a exror as unexpected token
// ({ a, b } = obj);
// console.log(a, b);

// //nested destructing in obj
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

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

// const arr = [7, 8, 9];

// const badNewArry = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArry);

// const newGoodArr = [1, 2, ...arr];
// console.log(newGoodArr);

// console.log(...newGoodArr);

// //new mwnu
// const newMenu = [...restaurant.mainMenu, 'Chicken tikka'];
// console.log(newMenu);

// //copy array
// //salo copy
// const mainMenuCopy = [...restaurant.mainMenu];
// //join 2 array
// const wholeMenu = [...mainMenuCopy, ...restaurant.starterMenu];
// console.log(wholeMenu);

// //spread operater applay in all iterable not object
// //iterable:array, String, maps, sets, Not objects

// const str = 'Abhihsek';
// const letters = [...str, ' ', 's. '];
// console.log(letters);
// console.log(...str);

// // const ingredients = [
// //   prompt("Let's make pasta"),
// //   prompt('ingredients'),
// //   prompt('ingredients'),
// // ];
// // console.log(ingredients);

// // restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2])
// // restaurant.orderPasta(...ingredients);

// //since 2018spread opr is also work in object

// const newRestaurant = { founingYear: 2019, ...restaurant, founder: 'Abhisek' };
// console.log(newRestaurant);

// //salo copy
// const restaurantcopy = { ...restaurant };
// restaurantcopy.name = 'Go Foodtion ';
// console.log(restaurantcopy);
// console.log(restaurant);

// //Rest Operater
// //rest pattern look like spread opr ...rest
// //rest parameter

//spred , beacuse on RIGTH side of =
// const arrray = [1, 2, 3, ...[4, 5, 6]];
// //REST, BEacuse on left side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , Risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, Risotto, otherFood);

// //Objects
// const { sat, ...weekdays } = { ...restaurant.openingHours };
// console.log({ ...restaurant.openingHours });
// console.log(weekdays);
// console.log(sat);

// const add = function (...numbers) {
//   // console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };

// add(2, 3); // arbitary amount of argument we dont know
// add(5, 6, 7);
// add(5, 6, 7, 5, 7);
// // add({ number: 1, number: 3, number: 5 });

// //spread with argument and rest in parameter
// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinch');
// restaurant.orderPizza('mushrooms');

// const resto = {
//   name: 'go',
//   id: 'igngeg',
// };
// const { name } = resto;
// console.log(name);

// const prop = {
//   res: {
//     data: {
//       name: 'jo',
//       id: 'someThink',
//     },
//   },
//   hello: 'world',
// };

// const { res, hello } = prop;
// console.log(res);

// const profileData = [
//   {
//     type: profile,
//     data: {
//       name: 'Abhishek',
//       age: 22,
//       img: 'https://www.linkedin.com/in/smriti-pradhan-926273185/overlay/photo/',
//     },
//   },
//   {
//     type: profile,
//     data: {
//       name: 'Abhishek',
//       age: 23,
//       img: 'https://media.licdn.com/dms/image/D5603AQH8t5zWTRKb-Q/profile-displayphoto-shrink_400_400/0/1663474153122?e=1685577600&v=beta&t=Vo_9ODvSlpGoW1TeVavv7OXRA_SNrHiemWKaKgfmTT0',
//     },
//   },
//   {
//     type: profile,
//     data: {
//       name: 'Hitesh Sir',
//       age: 30,
//       img: 'https://media.licdn.com/dms/image/D5603AQH8t5zWTRKb-Q/profile-displayphoto-shrink_400_400/0/1663474153122?e=1685577600&v=beta&t=Vo_9ODvSlpGoW1TeVavv7OXRA_SNrHiemWKaKgfmTT0',
//     },
//   },
//   {
//     type: profile,
//     data: {
//       name: 'Anurag Sir',
//       age: 30,
//       img: 'https://media.licdn.com/dms/image/D5603AQFelednnKJlJg/profile-displayphoto-shrink_400_400/0/1667584272134?e=1685577600&v=beta&t=TaE8KMehbz720oKe58M1FukBUYfjy_FojZZoos0yu6I',
//     },
//   },
//   {
//     type: profile,
//     data: {
//       name: 'Jonas Sir',
//       age: 30,
//       img: 'https://avatars.githubusercontent.com/u/18718850?v=4',
//     },
//   },
// ];
// console.log(profileData[0].data.name);

//three properties of logical operater use any datatype and return any datatype
// short-circuiting

// console.log(3 || 'Abhi');
// console.log('' || 'Abhi'); //Abhi
// console.log(true || 0); //true
// console.log(undefined || null); // null
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 0;
// // console.log(restaurant);
// //nullish coasing operater in 2020

// const guest1 = restaurant.numGuests || 10;
// console.log('guest1', guest1);

// //Nullish=null and undefine (only called as fasle )(and 0 and '' not been called as false )
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log('guestCorrect', guestCorrect);

// // const guest2 = restaurant.numGuests || 10;
// // console.log(guest2);

// //&& operater short circuits
// console.log('____AND__');
// console.log(0 && 'Abhi');
// console.log(7 && 'Abhi');
// console.log('Hello' && 23 && null && 'Abhishek');

// //Practical
// if (restaurant.orderPizza) {
//   restaurant.orderDelivery('mushrooms', 'spinach');
// }

// restaurant.orderPasta && restaurant.orderPizza();

// //Logical operater 2021
// const rest1 = {
//   name: 'Abhi',
//   // numGuest: 20,
//   numGuest: 0,
// };

// const rest2 = {
//   name: 'Go Fooodtion',
//   owner: 'Abhihske bhuyan',
// };

// // rest1.numGuest = rest1.numGuest || 10;
// // rest2.numGuest = rest2.numGuest || 10;

// // or Assigment Operater
// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;

// rest1.owner = rest2.owner && <ANNOYMOUS>;
// rest2.owner = rest2.owner && <ANNOYMOUS>;

// console.log(rest1);
// console.log(rest2);

// //Nullish or Assigment Operater
// rest1.numGuest ??= 10;
// rest2.numGuest ??= 10;

// Looping Array using The for of

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const items of menu) console.log(items);
// // items is belong to each elemnt of an array
// // continues and break is also used
// //current index not element but is originaly ment for element not index but it can be done
// for (const [index, ele] of menu.entries()) {
//   // console.log(index, ele);
//   console.log(`${index + 1}:${ele}`);
// }
// console.log([...menu.entries()]);
// menu.entries basically made each element an array which contain index and value of that element
// Enhanching oject literal
// const  openingHours= {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// },

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   openingHours: openingHours, // It may confusing in some case of the object enching is that if both the properties name is same then we can only write openingHours
//   openingHours,
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

// const weekdays = { 1: 'mon', 2: 'tue', 3: 'wed' };
// const openingHours = {
//   [weekdays[2]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[1]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[0]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// console.log(openingHours);

// const abcd = {
//   a: abhi,
//   print({ name = 0, age = 12, adress = 'udk' }) {
//     console.log(name, age, adress);
//   },
// };
// abcd.print({
//   adress: bbsr,
// });
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
// // With out using optional chaning
// // cant read the properties of an undefine
// console.log(carData[0].data.model);
// // using scope chaning
// //As we have use the scope chaining is return as soon it encounter nullish values
// console.log(carData[0].data.model?.modeltype);
// // but without returning Nullish values if we want to return some string 'model is not found so we can use short circuting here
// // with nullish coching operater
// console.log(carData[1].data.model?.modeltype || 'model is not found');
// // if it has model and modelhas model type as 0 then as we have using short circting thn 0 is consider as a faslely value so we can use nullish operate hers
// console.log(carData[0].data.model?.modeltype ?? 'model is nullish');

// // const data = {
// //   dataelement: {
// //     name: 'abhihsk',
// //     age: 21,
// //     clg: 'mca',
// //     address: 'bbsr',
// //     ph: 989899,
// //     hasvichel: true,
// //   },
// // };

// // function print(...obj) {
// //   console.log(obj[0].name);
// //   console.log('hello');
// //   // console.log(age);
// // }

// // const arr = [1, 2, 3, 4, [2, 3, 4]];
// // console.log([...arr[4]]);
// // console.log({ ...data.dataelement });
// // print({ ...data.dataelement });

// // const arr = [1, 2, 4, [2, 4, [3, 5]]];
// // console.log(arr[3][3]);

// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };
// for (let day of Object.keys(openingHours)) {
//   console.log(day);
// }
// for (let day of Object.values(openingHours)) {
//   console.log(day);
// }
// for (let [day, { open, close }] of Object.entries(openingHours)) {
//   console.log(`on ${day} we are open${open} and close ${close}`);
// }
// Set
//collection of unique values // no duplicate
// can have mix datatype
const orderSet = new Set([
  'pasta',
  'pizza',
  'pizza',
  'chickem',
  'pasta',
  'pizza',
]); //set(iterable)

console.log(orderSet);
console.log(new Set('Abhihske'));

//How to work with set

console.log(orderSet.size); //legth in array here size
console.log(orderSet.has('pasta')); // includes here has
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
console.log(orderSet);
orderSet.delete('pizza');
console.log(orderSet);
// Retrive values like array?
console.log(orderSet[0]); //undenfine
// orderSet.clear();
// console.log(orderSet);
// as this is iterable we can  loop over it
for (const order of orderSet) console.log(order);

// use case of set
//is duplicate values in to an array
const staff = [
  'waiter',
  'chef',
  'waiter',
  'chef',
  'Manager',
  'chef',
  'Waiter ',
];
// const staffunique = new Set(staff);
// console.log(staffunique);
// now convert the staffUnique Set to array as both them them iterable easy
// beacuse both of them is iterable
// As u have learn spred work in iterable
// const staffunique = [...new Set(staff)];
// console.log(staffunique);
// if do not need to covert we just want to know the unique postion of an
const staffuniquePostion = new Set(staff).size;
console.log(staffuniquePostion);

// how many different in my name
console.log(new Set('aabhi').size);

// Map
// is alomost usefull in map
// obj(string as key only) vs map (key can be any type)
const rest = new Map();
rest.set('name', 'GoFoodtion');
// console.log(rest);
console.log(rest.set(1, 'BBSR'));
rest
  .set('categories', ['chickrn', 'mutton', 'southIndan'])
  .set('open', 11) // Return Update mapp
  .set('close', 12)
  .set(true, 'We are open')
  .set(false, 'we are close');
console.log(rest);
// Why does think happen because as it return the update map so we can use set in that updated map
console.log(rest.get('name')); // as the time of getting the value the key datatpe is matter

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// has
console.log(rest.has('name'));
//delete an elements
//based on key
rest.delete(2);
console.log(rest);
console.log(rest.size);
// console.log(rest.clear());
console.log(rest);
//array and obj as keyr
const arr = [1, 2];
rest.set(arr, 'test');
console.log(rest);
// how to get data from the array typ key
console.log(rest.get(arr));

rest.set(document.querySelector('h1'), 'Heading');
rest.set(true, true);
console.log(rest);
