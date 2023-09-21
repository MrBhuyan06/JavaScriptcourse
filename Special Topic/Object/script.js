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

function person(name, age, add) {
  var newObj = {};
  (newObj.name = name), (newObj.age = age), (newObj.add = add);
  return newObj;
}
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

const myObject = {
  name: "Abhishek",
  age: 23,
  add: "BBSR",
};
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
