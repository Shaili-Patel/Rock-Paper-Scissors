let userName = prompt('What is your name?')
userName = userName.charAt(0).toUpperCase() + userName.slice(1);
//End Prompts

let myTitle = `
  <h2>${userName}!</h2>
`;
// Entire Title End

console.log(myTitle);

document.getElementById('title').innerHTML = myTitle;

//Console logging Complete

// Wait for the DOM to fully load before executing
document.addEventListener("DOMContentLoaded", function () {
  // Get the popup and the close button elements
  const popup = document.getElementById("welcome-popup");
  const closeBtn = document.getElementById("close-popup");

  // Event listener for closing the popup
  closeBtn.addEventListener("click", function () {
      popup.style.display = "none"; // Hide the popup
  });
});


const choices = ["rock", "paper", "scissors"];   
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById ("computerDisplay");
const resultDisplay = document.getElementById ("resultDisplay");
const playerScoreDisplay = document.getElementById ("playerScoreDisplay");
const computerScoreDisplay = document.getElementById ("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){

const computerChoice = choices[Math.floor(Math.random() * 3)];
let result = "";

if (playerChoice === computerChoice){
  result = "It's a tie!";
}
else{
  switch(playerChoice){
case "rock":
  result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
  break;

  case "paper":
  result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
  break;

  case "scissors":
    result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
    break;  
  
  }
}

resultDisplay.classList.remove("greenText", "redText");

playerDisplay.textContent = `Player: ${playerChoice}`;
computerDisplay.textContent = `Computer: ${computerChoice}`;
resultDisplay.textContent = result;

switch(result){
case "YOU WIN!":
  resultDisplay.classList.add("greenText");
  playerScore++;
  playerScoreDisplay.textContent = playerScore;
  break;
  case "YOU LOSE!":
  resultDisplay.classList.add("redText");
  computerScore++;
  computerScoreDisplay.textContent = computerScore;
  break;
}
}

