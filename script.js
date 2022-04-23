// let rps = ['rock', 'paper', 'scissors'];

// const computerPlay = function(min, max) {
//   return Math.random() * (max - min) + min;
// }

// const compGuess = computerPlay(0, 3);
// console.log(compGuess);

// const computerPlay = function(choice1, choice2, choice3) {
//   let item = rps[Math.floor(Math.random()*items.length)];
//   return item;
// };

// let compGuess = computerPlay;
// console.log(compGuess);






const userPlay = prompt('rock, paper, or scissors?');

const rps = ['rock', 'paper', 'scissors'];
const computerPlay = rps[Math.floor(Math.random() * rps.length)];

const playRound = function(userSelection, compSelection) {

}

const userSelection = userPlay;
const compSelection = computerPlay
console.log(userSelection, compSelection);