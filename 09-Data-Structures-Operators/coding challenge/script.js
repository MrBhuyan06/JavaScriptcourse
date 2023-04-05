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
