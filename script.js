//query dom
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const userScoreDisplay = document.querySelector('.userScore');
const compScoreDisplay = document.querySelector('.compScore');
const resultDisplay = document.querySelector('.result')

//scores
userScoreDisplay.innerHTML = 0;
compScoreDisplay.innerHTML = 0;
let gameScore = 0;
let userScore = 0;
let compScore = 0;

//array
let rps = ['rock', 'paper', 'scissors'];

//comp selection
const compPlay = function() {
  return rps[Math.floor(Math.random() * rps.length)];
};

//user selection
rock.addEventListener('click', () => playRound('rock', compPlay()));
paper.addEventListener('click', () => playRound('paper', compPlay()));
scissors.addEventListener('click', () => playRound('scissors', compPlay()));

//game function
const playRound = function (userSelect, compSelect) {
  if (userSelect === compSelect) {
    resultDisplay.innerHTML = 'Draw!', gameScore++
  } else if (rps[(rps.indexOf(compSelect) + 1) % rps.length] === userSelect) {
    resultDisplay.innerHTML = 'You win!', userScore++, userScoreDisplay.innerHTML++;
  } else { resultDisplay.innerHTML = 'You lose.', compScore++, compScoreDisplay.innerHTML++;
  }
  if (gameScore >= 5) {
    userScoreDisplay.innerHTML = '',
    compScoreDisplay.innerHTML = '',
    resultDisplay.innerHTML = 'DRAW! Play Again?'
  }
  else if (userScore >= 5) {
    userScoreDisplay.innerHTML = '',
    compScoreDisplay.innerHTML = '',
    resultDisplay.innerHTML = 'You WIN! Play Again?'
  }
  else if (compScore >= 5) {
    userScoreDisplay.innerHTML = '',
    compScoreDisplay.innerHTML = '',
    resultDisplay.innerHTML = 'You LOSE.. Try Again?'
  }
};








//game function
// const playRound = function(userPlay, compPlay) {
//   if (userPlay === compPlay) {
//     return 'Draw!';
//   } else if (userPlay == 'rock' && compPlay == 'scissors') {
//       return 'YOU WIN! Rock beats scissors.';
//   } else if (userPlay == 'rock' && compPlay == 'paper') {
//       return 'You Lose. Paper beats rock.';
//   } else if (userPlay == 'paper' && compPlay == 'rock') {
//       return 'YOU WIN! Paper beats rock.' + userScore++;
//   } else if (userPlay == 'paper' && compPlay == 'scissors') {
//       return 'You Lose. Scissors beats paper.';
//   } else if (userPlay == 'scissors' && compPlay == 'paper') {
//       return 'YOU WIN! Scissors beats paper.';
//   } else { (userPlay == 'scissors' && compPlay == 'rock') 
//       return 'You Lose. Rock beats scissors.';
//   }
// };

// // // //loop function
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