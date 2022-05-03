const rock = document.querySelector("Rock");
const paper = document.querySelector("Paper");
const scissors = document.querySelector("Scissors");









const rps = ['rock', 'paper', 'scissors'];

let userPlay = prompt('rock, paper, or scissors?').toLowerCase();
const compPlay = rps[Math.floor(Math.random() * rps.length)];

let userScore = 0;
let compScore = 0;
let gameScore = 0;

//game function
const playRound = function(userSelection, compSelection) {
  if (userSelection === compSelection) {
    return 'Draw!' + gameScore++;
  } else if (userSelection == 'rock' && compSelection == 'scissors') {
      return 'YOU WIN! Rock beats scissors.' + userScore++;
  } else if (userSelection == 'rock' && compSelection == 'paper') {
      return 'You Lose. Paper beats rock.' + compScore++;
  } else if (userSelection == 'paper' && compSelection == 'rock') {
      return 'YOU WIN! Paper beats rock.' + userScore++;
  } else if (userSelection == 'paper' && compSelection == 'scissors') {
      return 'You Lose. Scissors beats paper.' + compScore++;
  } else if (userSelection == 'scissors' && compSelection == 'paper') {
      return 'YOU WIN! Scissors beats paper.' + userScore++;
  } else { (userSelection == 'scissors' && compSelection == 'rock') 
      return 'You Lose. Rock beats scissors.' + compScore++;
  }
};

//loop function
// const game = function() {
//   for (let i = 0; i < 5; i++) 
//     if (i === 0) {
//     console.log(playRound(userPlay, compPlay))
//     } else { userPlay = prompt('rock, paper, or scissors?').toLowerCase();
//     const compPlay = rps[Math.floor(Math.random() * rps.length)];
//     console.log(playRound(userPlay, compPlay))
//     }
//     if (userScore >= 2) + console.log("You Win!");
//     else if (compScore >= 2) + console.log("You Lose.. Try Again?");
//     else (gameScore >= 2) + console.log('Draw! Play again?');
// };

// game();




//UBER SOLUTION
// const choices = ['rock', 'paper', 'scissors'];
// const message = choices.map((choice, index) => `${index + 1} - ${choice}`).join('\n');

// for (let i = 0; i < 5; ++i) {
//     const user = prompt(message) - 1;
//     const comp = Math.floor(Math.random() * choices.length);

//     if (user === comp) alert('Draw!');
//     else if ((comp + 1) % choices.length === user) alert('You win!');
//     else alert('You lose.');
// }



//unused code while learning

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

// console.log(playRound(userPlay, compPlay));

// loop the function
// const game = function() {
//   for (let i = 0; i < 5; i++) {
//     if (i === 0) {
//     console.log(playRound(userPlay, compPlay))
//     } else { userPlay = prompt('rock, paper, or scissors?').toLowerCase();
//     console.log(playRound(userPlay, compPlay))
//   }
// }
// }

// game();

// console.log(playRound(userPlay, compPlay));

// for (let i = 0; i < 5; i++) {
//   const userPlay = prompt('rock, paper, or scissors?');
//   const compPlay = rps[Math.floor(Math.random() * rps.length)];
//   console.log(playRound(userPlay, compPlay));
// }