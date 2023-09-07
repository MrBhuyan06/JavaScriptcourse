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

let p1 = new Promise((res, rej) => {
  if (true) {
    res("p1");
  }
});
let p2 = new Promise((res, rej) => {
  if (true) {
    res("p2");
  }
});
let p3 = new Promise((res, rej) => {
  if (true) {
    res("p2");
  }
});
// let res;

// async function resPromise() {
//   console.log("came");
//   res = await Promise.all([p1, p2, p3]).then((data) => {
//     return data;
//   });
//   console.log(res);
// }
// resPromise();
// console.log(res);
