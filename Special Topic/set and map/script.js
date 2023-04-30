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
