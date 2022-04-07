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
};
//Throws the users option
function throwRock() {
  playerChoice = "rock";
  computerChoice();
  playGame(playerChoice, compChoice)
  console.log(playerChoice, compChoice);
};

function throwPaper() {
  playerChoice = "paper";
  computerChoice();
  playGame(playerChoice, compChoice)
};

function throwScissor() {
  playerChoice = "scissor";
  computerChoice();
  playGame(playerChoice, compChoice)
};

//Resets the players scores
function reset(){
  pScoreboard.innerHTML = "0";
  cScoreboard.innerHTML = "0";
  roundResult.innerHTML = "";
};

//Shows player wins
function playerWin() {
  playerScore++;
  pScoreboard.innerHTML = playerScore;
  console.log("Player Wins!");
};

function computerWin() {
  computerScore++;
  cScoreboard.innerHTML = computerScore;
  console.log("Computer Wins!");
};

//Computer plays a round of the game
function playGame(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("tie");
  } else if (playerSelection === "rock" && computerSelection === "scissor") {
    playerWin();
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerWin();
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    playerWin();
  } else {
    computerWin();
  }
};
