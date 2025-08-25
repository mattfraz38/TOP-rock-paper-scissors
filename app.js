"use strict";

let humanScore = 0;
let computerScore = 0;
let humanChoice;

/*******************/
/***  Selectors  ***/
/*******************/

const body = document.querySelector("body");
const gameTypeDiv = document.querySelector("#gameType");
const gameTypes = document.querySelectorAll("#gameType");
const playSingleGameButton = document.querySelector("#singlePlay");
const choices = document.querySelectorAll("#rps-choices");

/************************/
/* Hide/Remove Elements */
/************************/

const removePlayButtons = (() => {
  // body.removeChild(gameTypeDiv);
  gameTypeDiv.style.display = "none";
});

Array.from(choices).forEach((choice) => {
  // body.removeChild(choice);
  choice.style.display = "none";
});

/*******************/
/*** Single Play ***/
/*******************/

// Choose what type of game you want to play
Array.from(gameTypes).forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target.id);

    removePlayButtons();

    displayChoices();

    // getHumanChoice();

    // playRound(getComputerChoice, getHumanChoice);

    // Array.from(choices).forEach((choice) => {
    //   body.appendChild(choice);
    // });
  });
});

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

  return randomNumber;
};

/***********************/
/** Game Move Choices **/
/***********************/

// Display a list of game move choices
let displayChoices = () => {
  const options = document.createElement("p");
  options.textContent = "Rock, Scissors, or Paper?";
  content.append(options);
  body.appendChild(content);

  choices.forEach((choice) => {
    choice.style.display = "block";
  });
};

/***********************/
/*** Game Play Moves ***/
/***********************/

// Collect the player move
let getHumanChoice = () => {
  Array.from(choices).forEach((choice) => {
    choice.addEventListener("click", (e) => {
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
      playRound(getComputerChoice, getHumanChoice);
    });
  });
};

console.log(getHumanChoice());

/************************/
/*** Calculate Winner ***/
/************************/

// Compare the number value of the user and computer choices and alert the user
// which is larger marking the winner then increment the winner score by one
let playRound = (computerChoice, userChoice) => {
  if (computerChoice > userChoice) {
    console.log("Computer Wins!");
    computerScore += 1;
  } else if (userChoice > computerChoice) {
    console.log("User Wins!");
    humanScore += 1;
  } else {
    console.log("It's a tie!");
    // computerChoice === getComputerChoice();
    // computerChoice === getComputerChoice();
  }
};

// play five rounds of rock, paper, scissors
// for (let i = 0; i < 5; i++) {
//   playRound(getComputerChoice(), getHumanChoice());
// }

// alert the user of the final score after five rounds
// alert(`User Score: ${humanScore}\nComputer Score: ${computerScore}`);



// Array.from(gameType).forEach((button) => {
//   button.addEventListener("click", (e) => {
//     console.log(e.target.id);
//     removePlayButtons(e.type.id);
//     displayChoices();
//     getHumanChoice();
//     // playRound(getComputerChoice, getHumanChoice);
//     Array.from(choices).forEach((choice) => {
//       body.appendChild(choice);
//     });
//   });
// });




// fiveRoundsGameButton.textContent = "Five Rounds";

// body.appendChild(playSingleGameButton);
// body.appendChild(fiveRoundsGameButton);


// content.textContent = "Rock, Scissors, or Paper?";

results.textContent = `User Score: ${humanScore}\nComputer Score: ${computerScore}`;
body.appendChild(results);



// Array.from(choices).forEach((choice) => {
//   choice.addEventListener("click", () => {
//     console.log("click");
//     // playRound(getComputerChoice(), getHumanChoice());
//   });
// });