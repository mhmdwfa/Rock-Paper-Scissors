console.log("hi");
let humanChoice;
let computerChoice;

function getRandom() {
  return Math.floor(Math.random() * 3) + 1;
}

function getCumputerChoice() {
  getRandom();
  if (getRandom() === 1) {
    computerChoice = "rock";
  } else if (getRandom() === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
}
function getHumanChoice() {
  let Human = prompt("Chose Rock, Paper ,Scissors");
  Human = Human.toLowerCase();
  while (Human !== "rock" && Human !== "paper" && Human !== "scissors") {
    Human = prompt("check the spelling, rock, paper, scissors");
    console.log(Human);
  }
  humanChoice = Human;
}
let humanScore = 0;
let computerScore = 0;

function playRound() {
  getCumputerChoice();
  getHumanChoice();
  console.log(humanChoice);
  console.log(computerChoice);
  console.log(humanScore, computerScore);
  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
    humanScore = ++humanScore;
    computerScore = ++computerScore;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore = ++humanScore;
    console.log(`you won ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore = ++computerScore;
    console.log(`you lost ${computerChoice} beats ${humanChoice}`);
  }
}
// let humanSelection = getHumanChoice;
// let computerSelection = getCumputerChoice;

function playGame() {
  while (humanScore < 5 && computerScore < 5) {
    playRound();
  }
  if (humanScore === 5 && computerScore === 5) {
    console.log("it's a draw!");
  } else if (humanScore === 5) {
    console.log("You won!");
  } else {
    console.log("You lost!");
  }
  console.log(humanScore, computerScore);
}
playGame();
console.log();
