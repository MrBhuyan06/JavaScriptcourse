const randomIntGen = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const randomColor = () => {
  return `rgb(${randomIntGen(0, 255)},${randomIntGen(0, 255)},${randomIntGen(
    0,
    255
  )})`;
};

document.querySelector("li").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log(e.target);
  //prevent the propagation
//   e.stopPropagation();
});

//Parent
document.querySelector("ul").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log(e.target); //
});
//grand parent
document.querySelector("header").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("nav"); //
  // console.log(e.target); //
});
