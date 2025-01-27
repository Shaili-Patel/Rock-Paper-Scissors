let userName = prompt("What is your name?");
userName = userName.charAt(0).toUpperCase() + userName.slice(1);

// Title display
let myTitle = `
  <h2>${userName}!</h2>
`;
console.log(myTitle);
document.getElementById("title").innerHTML = myTitle;

// Game variables
const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const roundsDisplay = document.getElementById("roundsDisplay");

let playerScore = 0;
let computerScore = 0;
let rounds = 0;

document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("welcome-popup");
  const closeBtn = document.getElementById("close-popup");

  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
  });
});

// Player Choices
function playGame(playerChoice) {
  if (rounds < 5) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoice === computerChoice) {
      result = "It's a tie!";
    } else {
      switch (playerChoice) {
        case "rock":
          result = computerChoice === "scissors" ? "YOU WIN!" : "YOU LOSE!";
          break;

        case "paper":
          result = computerChoice === "rock" ? "YOU WIN!" : "YOU LOSE!";
          break;

        case "scissors":
          result = computerChoice === "paper" ? "YOU WIN!" : "YOU LOSE!";
          break;
      }
    }
    // Player Choices End

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.classList.remove("greenText", "redText");
    resultDisplay.textContent = result;

    switch (result) {
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

    rounds++;
    roundsDisplay.textContent = `Round: ${rounds} of 5`;

    if (rounds === 5) {
      declareWinner();
    }
  }
}

// Winner Declaration
function declareWinner() {
  let finalMessage = "";
  if (playerScore > computerScore) {
    finalMessage = `Congratulations ${userName}! You won ${playerScore} out of 5 rounds! Refresh to play again!`;
  } else if (playerScore < computerScore) {
    finalMessage = `Good try, ${userName}. You lost ${playerScore} to ${computerScore}. Better luck next time! Refresh to play again!`;
  } else {
    finalMessage = `It's a tie! You both won ${playerScore} out of 5 rounds. Refresh to play again!`;
  }

  resultDisplay.textContent = finalMessage;
  resultDisplay.classList.add("finalResult");
}
// Winner Declaration Ends
