"use strict ";
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// . Create one player array for each team (variables 'players1' and
// 'players2')

const player1 = [...game.players[0]];
const player2 = [...game.players[1]];
// console.log(player1, player2);
// const [player1, player2] = game.players;
// console.log(player1, player2);

// const [gk, ...fieldplayer] = game.players[0];
// console.log(gk, fieldplayer);

const allplayer = [...player1, ...player2];
console.log(allplayer);

const player1Final = [...player1, "Thiago", "Coutinho", "Perisic"];
console.log(player1Final);

//5
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);
//6

function printGoal(...playerNo) {
  for (let i = 0; i < playerNo.length; i++) {
    console.log(playerNo[i]);
    console.log(`${playerNo.length} goal is scored`);
  }
}

printGoal(...allplayer);

console.log(team1 < team2 && console.log("Team1 is won the match"));
console.log(team1 > team2 && console.log("Team2 is won the match"));

//Coding challenge 2
//1
// for (const player of game.scored) {
//   console.log(player);
// }
for (const [index, player] of game.scored.entries()) {
  console.log(`Player Number ${index}, Player Name ${player}`);
}

//2
let avg = 0;
for (odd of Object.values(game.odds)) {
  // console.log(odd);

  avg += odd;
}
console.log(Math.trunc(avg / Object.values(game.odds).length));

//3
// for (odd of Object.values(game.odds)) {
//   console.log(`Odd of victory ${game.team1} victory : ${odd}`);
//   console.log(`Odd of draw  : ${odd}`);
//   console.log(`Odd of victory  ${game.team2} victory : ${odd}`);
// }

for (const [teamm, odd] of Object.entries(game.odds)) {
  const str = teamm === "x" ? "draw" : `odd of victory${teamm}`;
  console.log(`Odd ${str} : ${odd}`);
}

// const scores = {
//   Gnarby: 1,
//   Hummels: 1,
//   Lewandowski: 2,
// };
const scoress = {};

for (const player of game.scored) {
  // console.log(player);
  scoress[player] ? scoress[player]++ : (scoress[player] = 1);
}
console.log(scoress);
console.log(Object.entries(game.odds));

// 3Coding Challenge #3
// Let's continue with our football betting app! This time, we have a map called
// 'gameEvents' (see below) with a log of the events that happened during the
// game. The values are the events themselves, and the keys are the minutes in which
// each event happened (a football game has 90 minutes plus some extra time).
// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no
// duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽ GOAL

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "� Substitution"],
  [47, "⚽ GOAL"],
  [61, "� Substitution"],
  [64, "� Yellow card"],
  [69, "� Red card"],
  [70, "� Substitution"],
  [72, "� Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "� Yellow card"],
]);

// create an array 'events' of the different game events that happened (no
//   duplicates)

console.log(Object.entries(gameEvents));
let events = [...gameEvents.values()];
const enquieArray = new Set(events);
events = [...enquieArray];
console.log(events);

// . After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log
console.log(gameEvents);
gameEvents.delete(64);
console.log(gameEvents);

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// . Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽ GOAL

for ([key, values] of gameEvents) {
  const half = key <= 45 ? "First" : "Second";
  console.log(`[${half} Half]${key}: ${values}`);
}

// Coding Challenge #4
// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.
// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable
//  calculate_AGE
// delayed_departure
// Should produce this output (5 separate console.log outputs):
// underscoreCase ✅
// firstName ✅✅
// someVariable ✅✅✅
// calculateAge ✅✅✅✅
// delayedDeparture ✅✅✅✅✅
// Hints:
// § Remember which character defines a new line in the textarea �
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable
// name conversion working �
// § This challenge is difficult on purpose, so start watching the solution in case
// you're stuck. Then pause and continue!
// Afterwards, test with your own test data!
// GOOD LUCK �
// document.querySelector("#text").addEventListener("onChange", (e) => {
//   console.log(e.target.values);
// });

// console.log(text.textContent);

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", () => {
  console.log("hello");
  const textareValue = document.querySelector("textarea").value;
  // console.log(textareValue);
  const textareaSplit = textareValue.split("\n");
  console.log(textareaSplit);
  for (let [i, row] of textareaSplit.entries()) {
    const [first, last] = row.toLowerCase().trim().split("_");
    // console.log(last);
    const output = `${first}${last.replace(last[0], last[0].toUpperCase())}`;
    console.log(`${output.padEnd(20)} ${"✅".repeat(i + 1)}`);
  }
});

const variableNameCorrector = function (varibale) {
  const variableElementArray = varibale.split("_");
  const camelCaseVariable = variableElementArray[1];
  const newVariable = [];
  console.log(
    newVariable.push(
      camelCaseVariable.slice(0, 1).toUpperCase() + camelCaseVariable.slice(1)
    )
  );
  console.log(variableElementArray.join(""));
  console.log(variableElementArray);
  // for (const variable of variableElementArray) {
  //   console.log(variable.replace("_", ""));
  // }
};

variableNameCorrector("underscore_case");
