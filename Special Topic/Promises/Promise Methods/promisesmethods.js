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
//     res({
//       names: "abhisheo",
//     });
//   }
// });
// let p2 = new Promise((res, rej) => {
//   if (true) {
//     rej("p2");
//   }
// });
// let p3 = new Promise((res, rej) => {
//   if (true) {
//     res("p2");
//   }
// });
// Promise.all([p1, p2, p3])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
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

// 2.

// let p1 = new Promise((res, rej) => {
//   if (true) {
//     res({
//       names: "abhisheo",
//     });
//   }
// });
// let p2 = new Promise((res, rej) => {
//   if (true) {
//     rej("p2");
//   }
// });
// let p3 = new Promise((res, rej) => {
//   if (true) {
//     res("p2");
//   }
// });
// Promise.allSettled([p1, p2, p3])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
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

// let p1 = new Promise((res, rej) => {
//   let random = Math.trunc(Math.random() * 6 + 1);
//   setTimeout(() => {
//     if (true) {
//       rej("p1");
//     }
//   }, random * 1000);
// });
// let p2 = new Promise((res, rej) => {
//   let random = Math.trunc(Math.random() * 6 + 1);
//   setTimeout(() => {
//     if (true) {
//       rej("p2 error");
//     }
//   }, random * 1000);
// });
// let p3 = new Promise((res, rej) => {
//   let random = Math.trunc(Math.random() * 6 + 1);
//   setTimeout(() => {
//     if (true) {
//       rej("p3");
//     }
//   }, random * 1000);
// });

/***
 * !race
 * * As the name say which promise is settled fast it return that sattled promise data
 *
 *
 *
 */

// Promise.any([p1, p2, p3])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

/**
 * any it will return
 * it will return the fullfilled promise value of one promise
 * if all the promise is rejected it will return all prmise are rejected
 *
 */
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
// Promise.any([p1, p2, p3])
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//reject and resolve

// let data = Promise.all([
//   1,
//   2,
//   3,
//   4,
//   Promise.resolve("res1"),
//   //   Promise.reject("rej"),
//   Promise.resolve("rej"),
// ]);
// let res = data
//   .then((data) => {
//     return data;
//   })
//   .catch((error) => {
//     return error;
//   });
// res.then((data) => {
//   console.log(data);
// });

//promiseChainng

// let p1 = new Promise((res, rej) => {
//   if (true) {
//     res("success");
//   }
// });
// p1.then((data) => {
//   console.log(data);
//   return Promise.resolve("successful2");
// }).then((data) => {
//   conso
// })le.log(data);
// });

// let n= Promise((rej,res) =>
// {
//     if(true)

//     {
//         rej()
//     }
// let pro = Promise.resolve("promise shotcut");
// pro.then((data) => {
//   console.log(data);
// });
let pro = Promise.reject("promise shotcut");
pro
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log("e");
  });
