//create a function return a promise

// function fetchData() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       let data = { msg: "api is success" };
//       res(data);
//     }, 2000);
//   });
// }
// fetchData()
//   .then((data) => {
//     console.log(data.msg);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//create a promises

// let promise1 = new Promise((res, rej) => {
//   let random = Math.trunc(Math.random() * 6 + 1);
//   console.log(random);
//   if (random === 3) {
//     res({
//       name: "abhi",
//       pass: "Abhih",
//       ph: 2343,
//     });
//   } else {
//     rej();
//   }
// });
// ,
