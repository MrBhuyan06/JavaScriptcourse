const sideBarData = [
  {
    icon: "BiHomeAlt2",
    name: "Home",
  },
  {
    icon: "BiCompass",
    name: "Explore",
  },
  {
    icon: "BiBell",
    name: "Notification",
    count: 9,
  },
  {
    icon: "BiMessageAdd",
    name: "Message",
    msgCount: 8,
  },
  {
    icon: "BiBookBookmark",
    name: "BookMark",
  },
  {
    icon: "BiAnalyse",
    name: "Analytics",
  },
  {
    icon: "BiColor",
    name: "Theme",
  },
];

function dispplay_details({ icon, name }) {
  console.log(icon, name);
}

sideBarData.forEach((data) => {
  dispplay_details({ ...data });
});

[
  [1, 3],
  [2, 3],
  [4, 5],
].forEach((ele) => {
  console.log(...ele);
});

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // openingHours,
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivery to ${address} at ${time} `
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `HEre is your Declicious pasta with ${ing1}, ${ing2}, ${ing3})}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    if (otherIngredients.length == 0) {
      console.log(
        `oops sorry We cant processed with your other as u have not given otherIngredients details`
      );
    } else {
      console.log(`Thank you odering from us Your pizza is on the way`);
    }
  },
};

function displayObjectData({ ...objectRestuarent }) {
  console.log(objectRestuarent);
  for (let [index, ele] of Object.entries(objectRestuarent)) {
    console.log(index, ele);
  }
}

const { name, ...all } = restaurant;
console.log(name, all);
displayObjectData({ ...restaurant });

const arrayDp = [1, 2, 3, 3, 4];
const sets = new Set(arrayDp);
for (let ele of sets) {
  console.log(ele);
}
const setOfString = new Set("Abhi");
console.log(setOfString);
console.log(sets);
sets.add(12).add(14).add(15);
console.log("hello", sets);
console.log(sets.has(78));
console.log(sets.delete(12));
console.log(sets);
console.log(sets.entries());
console.log(sets.values());

const maps = new Map();
const arr = [1, 3];
maps.set("abhi", "name");
maps.set("abhi", "name");
maps.set(arr, "test");
console.log(maps.get(arr));
console.log(maps);

// convert an object to an object to an maps
const details = {
  name: "Abhishek",
  age: 12,
  address: "sundarpada",
};
console.log(typeof details.name);
console.log(Object.entries(details));
const convertMap = new Map(Object.entries(details));
console.log(convertMap);
console.log(...convertMap);

// covert map to array
const somearr = [
  [3, 4],
  [4, 5],
];
const mapToArray = new Map(somearr);
console.log(mapToArray);
const mapToarrayVariable = [[...mapToArray]];
console.log(mapToarrayVariable);
// const newSomeArray = [1, 2, 3, ...somearr];
console.log(...somearr);
// console.log(newSomeArray);
