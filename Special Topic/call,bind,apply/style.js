// "use strict";
// let obj = {
//   names: "Abhishek",
//   print: function () {
//     console.log(this.names);
//   },
// };
// const ref = obj.print;
// ref();

// let gymBbsr = {
//   mone: 123,
//   mone12: 232,
//   printTotalIncome(branchName) {
//     let total = this.mone + this.mone12;
//     console.log(total);
//     console.log(branchName);
//   },
// };
// gymBbsr.printTotalIncome("bbsr");

// let GymAngul = {
//   mone: 100,
//   mone12: 200,
// };

// let Gymcuttack = {
//   mone: 100,
//   mone12: 300,
// };

// const refFun = gymBbsr.printTotalIncome;
// refFun.call(GymAngul, "angul");
// refFun.call(Gymcuttack, "cuttack");

// function
// function data(name, add) {
//   (this.name = name), (this.add = add);
// }
// function data2(name, add, age) {
//   //   console.log(this);
//   //   let a = [name, add];
//   let funRef = data.bind(this, name, add);
//   console.log(funRef);
//   funRef();
//   this.age = age;
// }
// let n = new data2("abhi", "bbsr", 23);
// console.log(n);

// let obj = {
//   names: "Abhishek",
//   print() {
//     console.log(this.names);
//   },
// };
// let x = obj.print;
// let bindMenthod = x.bind(obj);
// console.log(bindMenthod);
// bindMenthod();

// bind
// function a(name, add) {
//   this.name = name;
//   this.add = add;
// }
// function b(name, add, age) {
//   let refno = a.bind(this, name, add);
//   console.log(refno);
//   refno();
//   this.age = age;
// }
// let n = new b("abhi", "bbsr", 23);
// console.log(n);

let obj = {
  names: "abhishek",
  add: "odisha",
  print(a, b, c) {
    console.log(this.names, this.add, a, b, c);
  },
};

function a(a, b, c) {
  this.print(1, 2, 3);
  console.log(this.names, this.add, a, b, c);
}

a.call(obj, 1, 2, 3);
