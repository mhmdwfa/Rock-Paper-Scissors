let computerChoice = '';
let computerSelection = getCumputerChoice;
let humanChoice = '';
let buttonPaper = document.createElement('button');
buttonPaper.name = 'Paper';
let buttonScissors = document.createElement('button');
buttonScissors.name = 'Scissors';
let buttonRock = document.createElement('button');
buttonRock.name = 'Rock';
let choices = document.createElement('h3');
let score = document.createElement('h3');
let div = document.createElement('div');
let finalResult = document.createElement('h3');

choices.innerText = 'human: ' + humanChoice + 'computer: ' + computerChoice;

let body = document.body;
body.append(div);
div.append(buttonPaper);
div.append(buttonRock);
div.append(buttonScissors);
div.append(choices);
div.append(score);
div.append(finalResult);
console.log('hi');
document.querySelectorAll('button').forEach((e) => {
  console.log(e);
  e.innerHTML = e.name;
});

function getRandom() {
  return Math.floor(Math.random() * 3) + 1;
}

function getCumputerChoice() {
  getRandom();
  if (getRandom() === 1) {
    computerChoice = 'rock';
  } else if (getRandom() === 2) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  }
}
// function getHumanChoice() {
//   let Human = prompt('Chose Rock, Paper ,Scissors');
//   Human = Human.toLowerCase();
//   while (Human !== 'rock' && Human !== 'paper' && Human !== 'scissors') {
//     Human = prompt('check the spelling, rock, paper, scissors');
//     console.log(Human);
//   }
//   humanChoice = Human;
// }
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice) {
  getCumputerChoice();
  choices.innerText =
    'human: ' + humanChoice + '|| computer: ' + computerChoice;
  console.log(humanChoice);
  console.log(computerChoice);

  console.log(humanScore, computerScore);
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    humanScore = ++humanScore;
    computerScore = ++computerScore;
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'paper') ||
    (humanChoice === 'paper' && computerChoice === 'rock')
  ) {
    humanScore = ++humanScore;
    console.log(`you won ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore = ++computerScore;
    console.log(`you lost ${computerChoice} beats ${humanChoice}`);
  }
  score.innerText =
    'your score is ' + humanScore + ', computer score is ' + computerScore;
  if (humanScore === 5 && computerScore === 5) {
    console.log("it's a draw!");
    humanScore = 0;
    computerScore = 0;
    finalResult.innerText = "it's a draw!";
  } else if (humanScore === 5) {
    console.log('You won!');
    humanScore = 0;
    computerScore = 0;
    finalResult.innerText = 'You won!';
  } else if (computerScore === 5) {
    console.log('You lost!');
    humanScore = 0;
    computerScore = 0;
    finalResult.innerText = 'You lost!';
  }
}

buttonPaper.addEventListener('click', () => {
  playRound('paper');
});
buttonRock.addEventListener('click', () => {
  playRound('rock');
});
buttonScissors.addEventListener('click', () => {
  playRound('scissors');
});

// function playGame() {
//   while (humanScore < 5 && computerScore < 5) {
//     playRound();
//   }
// if (humanScore === 5 && computerScore === 5) {
//   console.log("it's a draw!");
//   humanScore = 0;
//   computerScore = 0;
//   finalResult.innerText = "it's a draw!";
// } else if (humanScore === 5) {
//   console.log('You won!');
//   humanScore = 0;
//   computerScore = 0;
//   finalResult.innerText = 'You won!';
// } else {
//   console.log('You lost!');
//   humanScore = 0;
//   computerScore = 0;
//   finalResult.innerText = 'You lost!';
// }
