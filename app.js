"use strict";

console.log("Hello World");

// Generate a random number between 1 and 3 to represent the choices "Rock",
// "Scissors", or "Paper" then return that string value
let getComputerChoice = () => {
  let randomNumber = Math.ceil(Math.random() * 3);

  switch (randomNumber) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
  }
};

for (let i = 0; i < 5; i++) {
  console.log(getComputerChoice());
}