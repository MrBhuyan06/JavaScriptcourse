"use strict";

// const btn = document.querySelector(".btn-country");
// const countriesContainer = document.querySelector(".countries");
// // `https://restcountries.com/v2/name/${country}`;

// // function getCountry(country) {
// //   const resquest = new XMLHttpRequest();
// //   //open the request
// //   resquest.open("GET", `https://restcountries.com/v2/name/${country}`);
// //   resquest.send();
// //   resquest.addEventListener("load", function () {
// //     //   console.log("data just come");
// //     // console.log(resquest.responseText);
// //     //request we get is in json format
// //     //   console.log();
// //     const data = JSON.parse(this.responseText);
// //     console.log(data);
// //     console.log(country);
// //   });
// // }
// // getCountry("usa");
// // getCountry("germany");
// // console.log("synoco");

// //call back exAMPLE
// const renderHtml = (data, className = " ") => {
//   const html = `
//   <article class="country ${className}">
//   <img class="country__img" src="${data.flag}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name}</h3>
//     <h4 class="country__region"> ${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1000000
//     ).toFixed(1)} people</p>
//     <p class="country__row"><span>🗣️</span>${data.languages.name}</p>
//     <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//   </div>
// </article>`;
//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   countriesContainer.style.opacity = 1;
// };

// function getCountryAndNei(country) {
//   const res = new XMLHttpRequest();
//   res.open("GET", `https://restcountries.com/v2/name/${country}`);
//   res.send();
//   res.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     renderHtml(data);
//     const [neighbour] = data.borders;
//     console.log(neighbour);
//     if (!neighbour) {
//       return;
//     }

//     //neighbour Country 2 request
//     const res2 = new XMLHttpRequest();
//     res2.open("GET", `https://restcountries.com/v2/alpha/${neighbour}`);
//     res2.send();
//     res2.addEventListener("load", function () {
//       const data = JSON.parse(this.responseText);
//       // console.log(data);
//       renderHtml(data, "neighbour");
//     });
//   });
// }
// getCountryAndNei("usa");

let p1 = new Promise((res, rej) => {
  res("resovled");
});
console.log(p1);
console.log("start");

// async function asyncFun() {
//   /*   console.log("hello");
//   const res = await p1;
//   re
//   console.log(res); */
// }
let asynFun = async () => {
  return p1;
};

asynFun().then((data) => {
  console.log(data);
});
console.log("end");
