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






let userPlay = prompt('rock, paper, or scissors?');

const rps = ['rock', 'paper', 'scissors'];
const compPlay = rps[Math.floor(Math.random() * rps.length)];

//game function
const playRound = function(userSelection, compSelection) {
  if (userSelection === compSelection) {
    return 'Draw!';
  } else if (userSelection == 'rock' && compSelection == 'scissors') {
    return 'YOU WIN! Rock beats scissors.';
  } else if (userSelection == 'rock' && compSelection == 'paper') {
    return 'You Lose. Paper beats rock.';
  } else if (userSelection == 'paper' && compSelection == 'rock') {
    return 'YOU WIN! Paper beats rock.';
  } else if (userSelection == 'paper' && compSelection == 'scissors') {
    return 'You Lose. Scissors beats paper.';
  } else if (userSelection == 'scissors' && compSelection == 'paper') {
    return 'YOU WIN! Scissors beats paper.';
  } else { (userSelection == 'scissors' && compSelection == 'rock') 
    return 'You Lose. Rock beats scissors.';
  }
};

const game = function() {
  for (let i = 0; i < 5; i++) 
    if (i === 0) {
    console.log(playRound(userPlay, compPlay))
    } else { const userPlay = prompt('rock, paper, or scissors?');
    const compPlay = rps[Math.floor(Math.random() * rps.length)];
    console.log(playRound(userPlay, compPlay))
  }
};

game();

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