//object using a function

// function createFunctionObject(firstName, lastName, age) {
//   var newObject = {};
//   newObject.firstName = firstName;
//   newObject.lastName = lastName;
//   newObject.age = age;
//   return newObject;
// }

// let obj1 = createFunctionObject("Abhishek", "Bhuyan", 21);
// let obj2 = createFunctionObject("Smriti", "Bhuyan", 20);
// console.log(obj1);
// console.log(obj2);

//create a object using construter mode with new key word

// function person(name, age, add) {
//   var newObj = {};
//   (newObj.name = name), (newObj.age = age), (newObj.add = add);
//   return newObj;
// }
// const obj = person("abhi", "22", "bbsr");
// console.log(obj);
//both the case it will work
// const obj = new person("abhi", "22", "bbsr");
// console.log(obj);

// function Person(name, age, add) {
//   //var this={}
//   this.name = name;
//   this.age = age;
//   this.add = add;
// }
// const obj = Person("Abhi");
// console.log(obj);

// const myObject = {
//   name: "Abhishek",
//   age: 23,
//   add: "BBSR",
// };
//loop over this object

// for (let i in myObject) {
//   // console.log(i);
//   console.log(myObject[i]);
// }

//using keys
// Object.keys(myObject).forEach((i) => console.log(myObject[i]));
// const value = Object.values(myObject).forEach((i) => console.log(i));
// console.log(value);

//entries
// const entrie = Object.entries(myObject);
// console.log(entrie);
// print the key and value of the above object using Object.entries

// for ([key, value] of Object.entries(myObject)) {
//   console.log(`key is ${key}: value is ${value}`);
// }

//copy the obj

// let persons = {
//   name: "Abhishek",
//   age: 23,
//   add: "BBSR",
//   qulification: {
//     mca: true,
//     passout: "yes",
//   },
// };
// let objCopy = {};
// //this way copy clone or copy for one level
// for (let i in persons) {
//   // console.log(i);

//   objCopy[i] = persons[i];
// }

// console.log("person", persons);
// console.log("new Obj", objCopy);
// objCopy.name = "Gudu";
// objCopy.qulification.mca = false;
// console.log("person", persons);
// console.log("new Obj", objCopy);
// console.log(persons === objCopy); //fasle
// console.log(persons == objCopy); //fasle

// //assign
// // let target = {
// //   a: 1,
// //   b: 2,
// // };
// // let source = {
// //   b: 4,
// //   c: 5,
// // };
// // let source2 = {
// //   b: 8,
// //   c: 6,
// //   d: 89,
// // };

// //mutating the target object

// // const final = Object.assign(target, source, source2);
// // console.log(final === target);
// // console.log(target);
// // Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
// // console.log(Object.assign(target, source, source2));
// //copy all the enumerial from 1 or more source to target object

// const student = {
//   name: "Abhihske",
//   undefined: "passed",
//   null: "null",
//   10: "ten",
//   "Abhi Bhuyan": "name",
// };
// console.log(student["Abhi Bhuyan"]);

const arr = [1, 2, 3, 4, 5];
console.log(arr.length);
console.log(arr["length"]);
console.log("Welcome to Programiz!");
console.log("Welcome to Programiz!");

// const obj={
//     name:"Abhishek",
//     2:"two",
//     details: function ()
//     {

//         if(this.keys)
//         {
//             return false
//         }
//         else
//         {
//             return true
//         }
//     }
// }
// let res=obj.details()
// console.log(res)

// for(let  key in  obj)
// {
//     console.log(obj[key])
// }
// const age={
//     Abhishek:23,
//     gud:12,
//     dubham:20,
//     piyali:23
// }

// let sum=0
// for(let key in age)
// {
//     sum+=age[key]
// }
// console.log(sum)
// let obj3={}
// for(let key in age)
// {
//     obj3.key=age[key]
// }
// console.log(obj3)
