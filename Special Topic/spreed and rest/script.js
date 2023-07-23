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
const LIST_RES = [
  {
    id: 1,
    tittle: "pizza",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
    inStock: 7,
    rating: 3,
    fastDelivery: true,
    price: 280,
  },
  {
    id: 2,
    tittle: "Shawarma",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/2f34540e0b12058f5f8b9390c3a3fb4a1648972281.png",
    inStock: 3,
    rating: 4,
    fastDelivery: true,
    price: 120,
  },
  {
    id: 3,
    tittle: "Chicken",
    cover:
      "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
    inStock: 0,
    rating: 2,
    fastDelivery: true,
    price: 280,
  },
  {
    id: 4,
    tittle: "Burger",
    cover:
      "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
    inStock: 2,
    rating: 4,
    fastDelivery: false,
    price: 180,
  },

  {
    id: 6,
    tittle: "Fried Rice",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png",
    inStock: 0,
    rating: 4,
    fastDelivery: false,
    price: 160,
  },
  {
    id: 7,
    tittle: "Rolls",
    cover:
      "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
    inStock: 0,
    rating: 3,
    fastDelivery: false,
    price: 140,
  },
  {
    id: 8,
    tittle: "Dosa",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
    inStock: 7,
    rating: 4,
    fastDelivery: false,
    price: 50,
  },
  {
    id: 9,
    tittle: "Paratha",
    cover:
      "https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
    inStock: 0,
    rating: 3,
    fastDelivery: false,
    price: 180,
  },
  {
    id: 10,
    tittle: "Noodles",
    cover:
      "https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png",
    inStock: 7,
    rating: 3,
    fastDelivery: true,
    price: 150,
  },
];
const new_data = {
  id: 11,
  tittle: "new",
  cover:
    "https://b.zmtcdn.com/data/o2_assets/2f34540e0b12058f5f8b9390c3a3fb4a1648972281.png",
  inStock: 3,
  rating: 4,
  fastDelivery: true,
  price: 120,
};
const new_data2 = {
  id: 11,
  tittle: "new",
  cover:
    "https://b.zmtcdn.com/data/o2_assets/2f34540e0b12058f5f8b9390c3a3fb4a1648972281.png",
  inStock: 3,
  rating: 4,
  fastDelivery: true,
  price: 120,
};
const new_data3 = {
  id: 11,
  tittle: "new",
  cover:
    "https://b.zmtcdn.com/data/o2_assets/2f34540e0b12058f5f8b9390c3a3fb4a1648972281.png",
  inStock: 3,
  rating: 4,
  fastDelivery: true,
  price: 120,
};
let cart = [];
console.log([...cart]);
console.log([...LIST_RES, { ...LIST_RES[0] }]);
cart = [...cart, { ...new_data }];
cart = [...cart, { ...new_data2 }];
cart = [...cart, { ...new_data3 }];
cart = [...cart, { ...new_data, id: "new id" }];
// value = [...cart, {  }];

// value = [...cart, { ...new_data }];
// let value = [...cart, { ...new_data }];
console.log(cart);
