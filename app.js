"use strict";

let humanScore = 0;
let computerScore = 0;

/*******************/
/***  Selectors  ***/
/*******************/

const body = document.querySelector("body");
const gameTypeDiv = document.querySelector("#gameType");
const gameTypes = document.querySelectorAll("#gameType");
const playSingleGameButton = document.querySelector("#singlePlay");
const playBestOfFiveGameButton = document.querySelector("#bestOfFive");
const choices = document.querySelectorAll("#rps-choices button");
const playAgainButton = document.querySelector("#playAgain");
const rpsChoiceQuestion = document.querySelector("#rps-choices h2");
const rpsChoiceDIV = document.querySelector("#rps-choices");

/************************/
/* Hide/Remove Elements */
/************************/

const hideRPSChoices = (() => {
  Array.from(choices).forEach((choice) => {
    choice.style.display = "none";
  });
});

hideRPSChoices();
playAgainButton.style.display = "none";
rpsChoiceQuestion.style.display = "none";

/********************/
/**** Play Again ****/
/********************/

// Reset the DOM so you can play again
playAgainButton.addEventListener("click", () => {
  location.reload();
});

/*******************/
/*** Single Play ***/
/*******************/

// Choose what type of game you want to play
Array.from(gameTypes).forEach((button) => {
  button.addEventListener("click", (e) => {
    gameTypeDiv.style.display = "none";
    rpsChoiceQuestion.style.display = "block";
    displayChoices();
    console.log(`PC: ${getComputerChoice()}\nUser: ${getHumanChoice()}`);
  });
});

/********************/
/*** Best of Five ***/
/********************/

playBestOfFiveGameButton.addEventListener("click", () => {

});
// play five rounds of rock, paper, scissors
// for (let i = 0; i < 5; i++) {
//   playRound(getComputerChoice(), getHumanChoice());
// }

// alert the user of the final score after five rounds
// alert(`User Score: ${humanScore}\nComputer Score: ${computerScore}`);

/***********************/
/* Create New Elements */
/***********************/

const content = document.createElement("div");
const results = document.createElement("div");

/***********************/
/***** Game Logic ******/
/***********************/

// Generate a random number between 1 and 3 to represent the choices "Rock",
// "Scissors", or "Paper" then return that number value
let getComputerChoice = () => {
  let randomNumber = Math.ceil(Math.random() * 3);
  console.log(`getComputerChoice: ${randomNumber}`);
  return randomNumber;
};

/************************/
/*** Display Elements ***/
/************************/

// Display a list of game move choices
let displayChoices = () => {
  choices.forEach((choice) => {
    choice.style.display = "inline";
  });
};

function showPlayAgainButton() {
  playAgainButton.style.display = "block";
}

/***********************/
/*** Game Play Moves ***/
/***********************/

// Cannot be an arrow function because hoisting
function getHumanChoice() {
  choices.forEach((choice) => {
    choice.addEventListener("click", (e) => {
      let humanChoice;
      switch (e.target.textContent.toLowerCase()) {
        case "rock":
          humanChoice = 1;
          break;
        case "paper":
          humanChoice = 2;
          break;
        case "scissors":
          humanChoice = 3;
          break;
      }
      const computerChoice = getComputerChoice();
      playRound(computerChoice, humanChoice);
    });
  });
};

results.textContent = `User Score: ${humanScore}\nComputer Score: ${computerScore}`;
body.appendChild(results);

/************************/
/*** Calculate Winner ***/
/************************/

// Compare the number value of the user and computer choices and alert the user
// which is larger marking the winner then increment the winner score by one
function playRound(computerChoice, userChoice) {
  const showWinner = document.createElement("h2");
  showWinner.textContent = "";
  rpsChoiceQuestion.style.display = "none";
  hideRPSChoices();

  if (computerChoice > userChoice) {
    showWinner.textContent = "Computer Wins!";
    rpsChoiceDIV.appendChild(showWinner);
    console.log("Computer Wins!");
    computerScore += 1;
  } else if (userChoice > computerChoice) {
    showWinner.textContent = "User Wins!";
    rpsChoiceDIV.appendChild(showWinner);
    console.log("User Wins!");
    humanScore += 1;
  } else {
    showWinner.textContent = "It's a tie!";
    rpsChoiceDIV.appendChild(showWinner);
    console.log("It's a tie!");
  }

  showPlayAgainButton()
};
