// const students = [
//   {
//     studentname: "John Doe",
//     age: 18,
//     id: "12345",
//     gender: "Male",
//   },
//   {
//     studentname: "Jane Smith",
//     age: 17,
//     id: "54321",
//     gender: "Female",
//   },
//   {
//     studentname: "Michael Johnson",
//     age: 19,
//     id: "67890",
//     gender: "Male",
//   },
//   {
//     studentname: "Emily Brown",
//     age: 18,
//     id: "09876",
//     gender: "Female",
//   },
//   {
//     studentname: "James Wilson",
//     age: 20,
//     id: "54321",
//     gender: "Male",
//   },
//   {
//     studentname: "Sophia Lee",
//     age: 17,
//     id: "78901",
//     gender: "Female",
//   },
//   {
//     studentname: "Daniel Kim",
//     age: 19,
//     id: "23456",
//     gender: "Male",
//   },
//   {
//     studentname: "Olivia Garcia",
//     age: 18,
//     id: "56789",
//     gender: "Female",
//   },
//   {
//     studentname: "William Hernandez",
//     age: 20,
//     id: "34567",
//     gender: "Male",
//   },
//   {
//     studentname: "Ava Martinez",
//     age: 19,
//     id: "89012",
//     gender: "Female",
//   },
// ];

let deposite = [121, 2321, 3234, 1200, 321];
let res = deposite.some((deposite, inndex) => {
  console.log(inndex);
  return deposite > 1000;
});
console.log(res);

// // print all male student
// console.log("Print all male student");

// let maleStudentData = students.filter((student) => {
//   return student.gender.includes("Male");
// });
// // console.log(maleStudentData);
// maleStudentData.forEach((students) => {
//   console.log(students);
// });
// console.log("------------------------------");
// // print all Female student
// console.log("Print all female student");

// let femaleStudentData = students.filter((student) => {
//   return student.gender.includes("Female");
// });
// // console.log(maleStudentData);
// femaleStudentData.forEach((students) => {
//   console.log(students);
// });
// console.log("------------------------------");

// //PRINT STUDENT NAME ONLY
// console.log("Print Male student name");

// students.forEach((student) => {
//   if (student.gender.includes("Male")) {
//     console.log(student.studentname);
//   }
// });
// console.log("------------------------------");
// //print all student details elible for vote
// console.log("Print Elible vote  student ");

// students.forEach((student) => {
//   if (student.age >= 18) {
//     console.log(` This Student is Eligible for Vote ${student.studentname}`);
//   }
// });
// console.log("------------------------------");
// //print all student id  elible for vote
// console.log("Print student id Elible vote  student ");

// students.forEach((student) => {
//   if (student.age >= 18) {
//     console.log(` This Student is Eligible for Vote Id is  ${student.id}`);
//   }
// });
// console.log("------------------------------");

// //find  the largest number in an array

// let arry = [23, 12, 32, 1, 43, 12, 2, 3];
// let larget = arry[0];
// arry.forEach((ele, i) => {
//   if (arry[i] > larget) {
//     larget = ele;
//   }
// });
// console.log("The largest is larget", larget);

// console.log("------------------------------");
// console.log("Smallest number");

// let arrySmall = [23, 12, 32, 1, 43, 12, 2, 3];
// let small = arrySmall[0];
// arry.forEach((ele, i) => {
//   // console.log(arrySmall[i + 1]);
//   if (arrySmall[i + 1] < small) {
//     small = ele;
//   }
// });
// console.log("The largest is larget", small);
// console.log("-------------------");

// console.log("Array sorting");
// let sortarry = [2, 34, 43, 12, 1, 6];
// let tarnsformsortedArray = sortarry.sort((a, b) => b - a).map((ele) => ele * 7);
// console.log(tarnsformsortedArray);
// console.log("-------------------");
// let arrayDivide = [10, 20, 9, 13, 21, 29, -10];
// let newArray = arrayDivide.filter((ele) => ele % 3 === 0).reverse();
// console.log(newArray);

//Array methods

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// co---nsole.log(arr.slice(arr.length + 2));
//slice
// no mutate
// let arrSlice = arr.slice(23);
// console.log(arrSlice);

// let newArry = arr.splice(arr.length);
// console.log("new Arry", newArry);
// console.log("ariginalArray", arr);

let arrSmallest = [23, 21, 32, 21, 1, 22, 0, 29, -3, -1];

// let smallest = arrSmallest.reduce((acc, ele) => {
//   if (ele < acc) {
//     acc = ele;
//   }
//   return acc;
// });
// console.log(smallest);

let largest = arrSmallest.reduce((acc, ele) => {
  if (ele > acc) {
    acc = ele;
  }
  return acc;
});
console.log(largest);
console.log(window);
