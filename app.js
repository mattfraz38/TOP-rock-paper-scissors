"use strict";

let humanScore = 0;
let computerScore = 0;
let bestOfFiveGame = false;
let singlePlayGame = false;
let roundCounter = 0;
let maxRounds = 5;
let listenersAttached = false;

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
  if (singlePlayGame) {
    location.reload();
  } else {
    displayChoices();
    if (roundCounter === 5) {
      location.reload();
    }
  }
});

playBestOfFiveGameButton.addEventListener("click", () => {
  bestOfFiveGame = true;
  if (roundCounter === 5) {
    bestOfFiveGame = false;
  }
});

function startGame() {
  gameTypeDiv.style.display = "none";
  rpsChoiceQuestion.style.display = "block";
  displayChoices();
  getHumanChoice();
}

/*******************/
/*** Single Play ***/
/*******************/

// Choose what type of game you want to play
const singlePlayGameType = () => {
  Array.from(gameTypes).forEach((button) => {
    button.addEventListener("click", (e) => {
      if (e.target.textContent === "Single Play") {
        singlePlayGame = true;
      } else {
        bestOfFiveGame = true;
        bestOfFiveGameType();
      }

      gameTypeDiv.style.display = "none";
      rpsChoiceQuestion.style.display = "block";
      displayChoices();
      startGame();
    });
  });
};

/********************/
/*** Best of Five ***/
/********************/

singlePlayGameType();
const bestOfFiveGameType = () => {
  if (bestOfFiveGame) {
    gameTypeDiv.style.display = "none";
    displayChoices();
    getHumanChoice();
  }
};

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
function getComputerChoice() {
  let randomNumber = Math.ceil(Math.random() * 3);
  console.log(`getComputerChoice: ${randomNumber}`);
  return randomNumber;
}

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

function getHumanChoice() {
  if (listenersAttached) return; // prevent duplicates
  listenersAttached = true;

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

/************************/
/*** Calculate Winner ***/
/************************/

// Compare the number value of the user and computer choices and alert the user
// which is larger marking the winner then increment the winner score by one
function playRound(computerChoice, userChoice) {
  const showWinner = document.createElement("h2");
  showWinner.textContent = "";

  if (computerChoice > userChoice) {
    showWinner.textContent = "Computer Wins!";
    console.log("Computer Wins!");
    computerScore += 1;
  } else if (userChoice > computerChoice) {
    showWinner.textContent = "User Wins!";
    console.log("User Wins!");
    humanScore += 1;
  } else {
    showWinner.textContent = "It's a tie!";
    console.log("It's a tie!");
  }

  rpsChoiceDIV.appendChild(showWinner);
  console.log(`Round ${roundCounter + 1}: ${showWinner.textContent}`);
  if (bestOfFiveGame) {
    roundCounter++;

    if (roundCounter === maxRounds) {
      hideRPSChoices();

      const finalMessage = document.createElement("h2");
      finalMessage.textContent = `Final Score\nUser: ${humanScore}\nComputer: ${computerScore}`;
      rpsChoiceDIV.appendChild(finalMessage);
      showPlayAgainButton();
    } else {
      hideRPSChoices();
      showPlayAgainButton();
    }
  }

  showPlayAgainButton()
};
