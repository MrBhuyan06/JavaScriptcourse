'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // openingHours,
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
//Destrucing basicallly it mean to assign an object key or array element to different indivual values
const arrayOfResturent = [
  {
    data: {
      name: 'GoFoodtin',
      address: 'sundarpad',
      rating: '4star',
    },
  },
  {
    data: {
      name: 'GoFoodtin1',
      address: 'sundarpad1',
      rating: '4star1',
    },
  },
  {
    data: {
      name: 'GoFoodtin2',
      address: 'sundarpad2',
      rating: '4star2',
    },
  },
];
// console.log(arrayOfResturent[0].data);
// {name: 'GoFoodtin', address: 'sundarpad', rating: '4star'}

function toPrintRestuarentDetails({ name: Name, rating: Rating }) {
  // console.log(prop);
  console.log(Name, Rating);
}
toPrintRestuarentDetails({ ...arrayOfResturent[0].data });
console.log({ ...arrayOfResturent[0].data });
console.log(arrayOfResturent[0].data);

function printCardetails([name, model, color]) {
  console.log(name, model, color);
}
//withOutUsing[]
function printCardetailsBarket(name, model, color) {
  console.log(name, model, color);
}
function printCardetailsAcceptArgumetKeywrd() {
  // console.log(name, model, color);
  console.log('1', arguments);
  const [name, model, color] = arguments;
  console.log(name, model, color);
}
// {

// }

let datas = [];
const arrayOfCarDetails = [
  ['car', (datas = ['maruti', '1123', 'red'])],
  ['car', (datas = ['nissan', '1023', 'black'])],
  ['car', (datas = ['tata', '1103', 'white'])],
  ['car', (datas = ['mahindra', '1093', 'brown'])],
];
printCardetails(arrayOfCarDetails[0][1]);
printCardetailsBarket(...arrayOfCarDetails[0][1]);
printCardetailsAcceptArgumetKeywrd(...arrayOfCarDetails[0][1]);
console.log(arrayOfCarDetails[0][1]);
console.log(...arrayOfCarDetails[0][1]);
