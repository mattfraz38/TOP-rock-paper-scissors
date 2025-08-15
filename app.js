"use strict";

let humanScore = 0;
let computerScore = 0;

// Generate a random number between 1 and 3 to represent the choices "Rock",
// "Scissors", or "Paper" then return that number value
let getComputerChoice = () => {
  let randomNumber = Math.ceil(Math.random() * 3);

  return randomNumber;
};

// Prompt the user for their choice of "Rock, Scissors, or Paper" then 
// return the number value of their choice
let getHumanChoice = () => {
  let userChoice = prompt("Rock, Scissors, or Paper?");

  switch (userChoice.toLowerCase()) {
    case "rock":
      return 1;
    case "paper":
      return 2;
    case "scissors":
      return 3;
  }
};

// Compare the number value of the user and computer choices and alert the user
// which is larger marking the winner then increment the winner score by one
let playRound = (computerChoice, userChoice) => {
  if (computerChoice > userChoice) {
    alert("Computer Wins!");
    computerScore += 1;
  } else if (userChoice > computerChoice) {
    alert("User Wins!");
    humanScore += 1;
  } else {
    alert("It's a tie!");
    computerChoice = getComputerChoice();
    computerChoice = getComputerChoice();
  }
};

// play five rounds of rock, paper, scissors
for (let i = 0; i < 5; i++) {
  playRound(getComputerChoice(), getHumanChoice());
}

// alert the user of the final score after five rounds
alert(`User Score: ${humanScore}\nComputer Score: ${computerScore}`);
