'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movement) {
  // console.log(movement);
  containerMovements.innerHTML = '';
  movement.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
     <div class="movements__row">
     <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
     <div class="movements__date">3 days ago</div>
     <div class="movements__value">${mov}</div>
   </div>
     `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);
// console.log(containerMovements.innerHTML);
//compute user name
const user = 'Steven Thomas Williams';
const createUserName = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => {
        return name[0];
      })
      .join('');
  });
};

createUserName(accounts);
console.log(accounts);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  labelBalance.textContent = `${balance} EUR`;
};
calcDisplayBalance(account1.movements);

const calDisplaySummary = function (movements) {
  const income = movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income}💶`;
  const outcome = movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcome)}💶`;

  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter((ini, i, arr) => {
      console.log(arr);
      return ini >= 1;
    })
    .reduce((acc, ini) => acc + ini, 0);
  labelSumInterest.textContent = `${interest}💶`;
};
calDisplaySummary(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-1));
console.log(arr.slice(-3));
console.log(arr.slice(1, -2)); //-2 index ,mean expect last 2
//solo copy of an array
console.log(arr.slice() === arr);
console.log([...arr]);

// // spice
// //Same as the slice but the only different is muated the original array

// // console.log(arr.splice(2));
// //remove last element in the array
console.log(arr);
console.log(arr.splice(-1));
console.log(arr.splice(1, 2, 'abhi'));
console.log(arr);

// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// //Reverse
// console.log(arr2.reverse());
// // reverse does mutated the original array
// //ConCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// //Join
// console.log(letters.join('-'));

// The new At Method
const arrt = [23, 11, 64];
console.log(arrt[0]);
console.log(arrt.at(0));

// //getting last array element
// console.log(arr.at(arr.length - 1));
// console.log(arr[arr.length - 1]);
// // solution to above
// console.log(arr.slice(-1)[0]);
// // More usefull
// console.log(arr.at(-1));
// // At method also work with Strins
// console.log('abhi'.at(-1));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (let i = 0; i <= movements.length - 1; i++) {
// //   console.log(`Using For Loop ${movements[i]}`);
// // }
// // console.log('-------------');

// // for (let index of movements) {
// //   console.log(`Using For of ${index}`);
// // }
// // console.log('-------------');
// // movements.forEach(index => {
// //   console.log(`Using forEach ${index}`);
// // });

// for (const [index, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`You Deposites ${index + 1}  ${movement}`);
//   } else {
//     console.log(`You Withdraw  ${index + 1}  ${Math.abs(movement)}`);
//   }
// }
// console.log('----FOREACH----');

// movements.forEach((movement, index, arr) => {
//   console.log(arr);
//   if (movement > 0) {
//     console.log(`You Deposites index  ${index + 1} ${movement}`);
//   } else {
//     console.log(`You Withdraw index ${index + 1} ${Math.abs(movement)}`);
//   }
// });
//0:function(200)
//1:function(450)
//2:function(400)

// Array method
// const arrayOne = [1, 2, 3, 4, 5];
// console.log(arrayOne.reverse());
// // console.log(arrayOne);
// // const arrayTwo = [1, 2, 3, 4, 5];
// // // console.log(arrayOne.length);
// console.log(arrayOne.push(1));
// // console.log(arrayOne);
// // console.log(arrayOne.pop());
// // console.log(arrayOne);
// console.log(arrayOne.shift(2));
// // console.log(arrayOne);
// console.log(arrayOne.unshift(2, 33));
// // console.log(arrayOne);
// console.log(arrayOne.slice(1));
// console.log(arrayOne.slice(1, 3));
// console.log(arrayOne.slice(-2));
// console.log(arrayOne);
// console.log(arrayOne.splice(1, 2, 9, 9));
// console.log(arrayOne);
// const arrr45 = [23, 23];
// const arrr46 = [23, 23];
// const arrr47 = [23, 23];
// console.log(arrayOne.concat(arrayTwo, arrr47, arrr46, arrr45));
// console.log( [1, 2, 3, 4].join('+'));

// Array mehtod (transform method)
//map filter reduce

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// //Map
const euroToUsd = 1.1;
const movementsUSD = movements.map(mov => {
  return mov * euroToUsd;
});
console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(Math.trunc(mov * euroToUsd));
}
console.log(movementsUSDfor);
// // its has too has 3 parameter element,index,array
// for each is create the side effect
const movementsDescriptions = movements.map(
  (mov, index) =>
    `Movement ${index + 1}: you ${mov > 0 ? 'deposited' : 'withdraw'}
  ${Math.abs(mov)}`
);
console.log(movementsDescriptions);
const movementss = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movementss.filter(mov => mov > 0);
console.log(deposits);

// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);

// console.log(depositsFor);

const withdraw = movementss.filter(mov => mov < 0);
console.log(withdraw);

//Reduces
//accumulater -> snowball
//has 2 argument one acc and sencond the init value of accumulater

// const addMov = movements.reduce((acc, curr, i, arr) => {
//   console.log(acc);
//   console.log(curr);
//   return acc + curr;
// }, 0);

// console.log(addMov);

// maximum value
const maxmium = movements.reduce((acc, curr) => {
  if (acc > curr) return curr;
  else return curr;
}, movements[0]);
console.log(maxmium);

// The Magic of chanining Mthods

//pip
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * euroToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);
