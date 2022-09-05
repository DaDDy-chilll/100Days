const obj = {
  firstName: "DaDDy",
  age: 23,
  relation: "single",
  order: function (...num) {
    return num;
  },
};
// obj.customers = 0;
// const guest = obj.customers ? obj.customers : 13;
// const guest1 = obj.customers ?? 10;
// console.log(guest1);

// obj.order && obj.order(1, 23, 5, 5);
// const obj1 = {
//   firstName: "Chill",
//   age: 20,
//   relation: "married",
//   order: function (...num) {
//     return num;
//   },
// };

//!Coding Challenge 1
const game = {
  tema1: "Bayern Munich",
  team2: "borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Matinez",
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
      "weigl",
      "Witsel",
      "Hazard",
      "Barandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewaandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// //todo Coding Challenge Solution
// const [player1, player2] = game.players;

// //? Question 2
// const [gk, ...fieldPlayer] = player1;

// //? Queston 3
// const allPlayers = [...player1, ...player2];

// //? Queston 4
// const player1Final = [...player1, "Thiago", "Coutinho", "Perisic"];

// //? Queston 5
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// //? Queston 6
// function printGoals(...goalPlayer) {
//   console.log(`${goalPlayer.length} goals ware scores`);
// }
// printGoals(...game.scored);

// //? Queston 7
// team1 > team2 && console.log(`Team2 is more likely to win`);
// team1 < team2 && console.log(`Team1 is more likely to win`);

const allPlayers = [...game.players[0], ...game.players[1]];
// console.log(allPlayers);

for (const player of allPlayers.entries()) {
  console.log(player[1]);
}
