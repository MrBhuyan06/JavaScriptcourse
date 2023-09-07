// we have 4 methods
// 1.all
//2.allSettled
//3.race
//4.any

//incline promise Methods

/**
 * ! all -> take array for argument
 * ! return all of promise fullfiled data then all the promise is fullfiled
 * ! return the reject res or data as soon as it encounter the rejected and return value
 *
 *
 *
 */
// Promise.all([
//   new Promise((res, rej) => {
//     if (true) {
//       res("promise1");
//     }
//   }),
//   new Promise((res, rej) => {
//     if (true) {
//       res("promise2");
//     }
//   }),
//   new Promise((res, rej) => {
//     if (true) {
//       rej("promise3");
//     }
//   }),
//   new Promise((res, rej) => {
//     if (true) {
//       res("promise4");
//     }
//   }),
// ])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//define promise in different way

// let p1 = new Promise((res, rej) => {
//   if (true) {
//     res("p1");
//   }
// });
// let p2 = new Promise((res, rej) => {
//   if (true) {
//     res("p2");
//   }
// });
// let p3 = new Promise((res, rej) => {
//   if (true) {
//     res("p2");
//   }
// });
// Promise.all([p1, p2, p3]).then((data) => {
//   console.log(data);
// });
// // let res;

// async function resPromise() {
//   console.log("came");
//   res = await Promise.all([p1, p2, p3]).then((data) => {
//     return data;
//   });
//   console.log(res);
// }
// resPromise();
// console.log(res);

// 2.allsettled
/**
 * ! this is return all the settled promise fullfiled and rejected
 * ! each res will covert object
 *  0
: 
{status: 'fulfilled', value: 'p1'}
1
: 
{status: 'fulfilled', value: 'p2'}
2
: 
{status: 'fulfilled', reason: 'p2'}// rejected responses
length
: 
3
 *
 *
 *
 */

//async behaviour Promise

let p1 = new Promise((res, rej) => {
  let random = Math.trunc(Math.random() * 6 + 1);
  setTimeout(() => {
    if (true) {
      res("p1");
    }
  }, random * 1000);
});
let p2 = new Promise((res, rej) => {
  let random = Math.trunc(Math.random() * 6 + 1);
  setTimeout(() => {
    if (true) {
      rej("p2 error");
    }
  }, random * 1000);
});
let p3 = new Promise((res, rej) => {
  let random = Math.trunc(Math.random() * 6 + 1);
  setTimeout(() => {
    if (true) {
      res("p3");
    }
  }, random * 1000);
});

/***
 * !race
 * * As the name say which promise is settled fast it return that sattled promise data
 *
 *
 *
 */

Promise.race([p1, p2, p3])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });