
let icon = {
  rock: '&#9994;',
  paper: '&#9995;',
  scissor: '&#9996;'
};

document.querySelector('.js-score-button')
  .addEventListener('click', () => {
    scoreReset();
    localStorage.removeItem('score');
  });

function scoreReset() {
  document.getElementById("win_score").innerHTML = score.wins = 0;
  document.getElementById("lose_score").innerHTML = score.losses = 0;
  document.getElementById("tie_score").innerHTML = score.ties = 0;
  document.getElementById("result-section").innerHTML = 'v/s';
  document.getElementById("user-icon").innerHTML = icon.rock;
  document.getElementById("computer-icon").innerHTML = icon.rock;
  document.getElementById("user-icon").style.animation = "clashHand 0.4s ease-in-out infinite";
  document.getElementById("computer-icon").style.animation = "clashHand2 0.4s ease-in-out infinite";
};

let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

document.querySelector('.js-rock-button-section')
  .addEventListener('click', () => {
    playGame('rock');
  });
document.querySelector('.js-paper-button-section')
 .addEventListener('click', () => {
    playGame('paper');
  });
document.querySelector('.js-scissor-button-section')
 .addEventListener('click', () => {
    playGame('scissor');
  });

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'rock') {
    document.getElementById("user-icon").innerHTML = icon.rock;
    if (computerMove === 'rock') {
      result = 'tie';
    } else if (computerMove === 'paper') {
      result = 'you lose';
    } else if (computerMove === 'scissor') {
      result = 'you win';
    }
  } else if (playerMove === 'paper') {
    document.getElementById("user-icon").innerHTML = icon.paper;
    if (computerMove === 'paper') {
      result = 'tie';
    } else if (computerMove === 'rock') {
      result = 'you win';
    } else if (computerMove === 'scissor') {
      result = 'you lose'
    }
  } else if (playerMove === 'scissor') {
    document.getElementById("user-icon").innerHTML = icon.scissor;
    if (computerMove === 'scissor') {
      result = 'tie';
    } else if (computerMove === 'rock') {
      result = 'you lose';
    } else if (computerMove === 'paper') {
      result = 'you win';
    }
  }


  if (result === 'you win') {
    document.getElementById("win_score").innerHTML = score.wins = score.wins + 1;
  } else if (result === 'you lose') {
    document.getElementById("lose_score").innerHTML = score.losses = score.losses + 1;
  } else if (result === 'tie') {
    document.getElementById("tie_score").innerHTML = score.ties = score.ties + 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  if (result === 'you win' || 'you lose' || 'tie') {
    document.getElementById("result-section").innerHTML = result.toUpperCase() + ' !';
  }

  if (computerMove === 'rock') {
    document.getElementById("computer-icon").innerHTML = icon.rock;
  } else if (computerMove === 'paper') {
    document.getElementById("computer-icon").innerHTML = icon.paper;
  } else if (computerMove === 'scissor') {
    document.getElementById("computer-icon").innerHTML = icon.scissor;
  }

  if ('paper' || 'rock' || 'scissor' === computerMove) {
    document.getElementById("computer-icon").style.animation = "none";
  }
  if ('rock' || 'paper' || 'scissor' === playerMove) {
    document.getElementById("user-icon").style.animation = "none";
  }

  // console.log(result);
  // alert(`You choose ${playerMove}. Computer Choose ${computerMove}. ${result}.
  // // ${score.wins} ${score.losses} ${score.ties}`)
}


function pickComputerMove() {

  const randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  }
  else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  }
  else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissor';
  }
  return computerMove;
}
