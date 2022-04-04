//Starting variables
//Starting HTML elements as a variable for easy success
let pScoreboard = document.querySelector('.p-count');
let cScoreboard = document.querySelector('.c-count');
let roundResult = document.querySelector('.result');
//setting score variables for player & computer to track score
let playerScore = 0;
let computerScore = 0;
//initializing global variables to store usr and computer selections
let compChoice;
let playerChoice;

// function to randomly generate a choice for the computer
function computerChoice() {
  const computerOptions = ["rock", "paper", "scissor"];
  const randomNum = Math.floor(Math.random() * 3);
  compChoice = computerOptions[randomNum];
}
