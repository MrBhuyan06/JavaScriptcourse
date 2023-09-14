// let a = Number("23");
// console.log(a);

const printArraySum = (arr) => {
  const firstEle = arr[0];
  const lastEle = arr[arr.length - 1];
  return firstEle + lastEle;
};

let res = printArraySum([1, 2, 3, 4]);
console.log(res);
//
// if a and b both not type number retrun invalid input
const printSum = ({ a, b }) => {
  // if (NaN(a) || NaN(b))
  // {
  //   return "invalid input"
  // }
  //   if (arr.length > 0) {
  //   }
  NaN(a) || NaN(b) ? "invalid input" : Number(a) + Number(b);
};
// 1.primmitve
// 2.ref typeof
// 1.Number
// 2.string
// 3.null
//5.NaN
// 4.undefine
// 5.Bigint
// 6.symbol
// ref
// object
// Array
// function
// regex
