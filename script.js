//Starting variables
//Starting HTML elements as a variable for easy success
let pScoreboard = document.querySelector('.p-count');
let cScoreboard = document.querySelector('.c-count');
let roundResult = document.querySelector('.result');
//setting score variables for player & computer to track score
let playerScore = 0;
let computerScore = 0;
//initializing global variables to store use and computer selections
let compChoice;
let playerChoice;

// function to randomly generate a choice for the computer
function computerChoice() {
  const computerOptions = ["rock", "paper", "scissor"];
  const randomNum = Math.floor(Math.random() * 3);
  compChoice = computerOptions[randomNum];
}
//Computer plays a round of the game
function playRound(playerChoice, computerSelection) {
  if (playerChoice === computerSelection) {
    console.log("tie");
  } else if (playerChoice === "rock" && computerSelection === "paper") {
    console.log("YOU LOSE");
    computerWin();
  } else if (playerChoice === "rock" && computerSelection === "scissors") {
    console.log("YOU WIN");
    playerWin();
  } else if (playerChoice === "paper" && computerSelection === "rock") {
    console.log("YOU WIN");
    playerWin();
  } else if (playerChoice === "paper" && computerSelection === "scissors") {
    console.log("YOU LOSE");
    computerWin();
  } else if (playerChoice === "scissors" && computerSelection === "paper") {
    console.log("YOU WIN");
    playerWin();
  } else {
    console.log("YOU LOSE");
    computerWin();
  }
}
//Shows player wins
function playerWin() {
  ++playerScore;
  console.log("Player Score is " + playerScore);
}
function computerWin() {
  ++computerScore;
  console.log("Computer Score is " + computerScore)

}
