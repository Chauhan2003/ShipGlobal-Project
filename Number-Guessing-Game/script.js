// script.js

let randomNumber;
let attempts = 0;
const maxAttempts = 5; // Set the maximum number of attempts

// Function to generate a random number between 1 and 100
function generateRandomNumber() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log("Random number (for debugging):", randomNumber); // Remove this line in production
}

// Function to handle user's guess
function handleGuess() {
  const userGuess = parseInt(document.getElementById("userGuess").value);
  const feedback = document.getElementById("feedback");
  const attemptsDisplay = document.getElementById("attempts");

  // Validate the input
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    feedback.textContent = "Please enter a valid number between 1 and 100.";
    return;
  }

  // Increment attempt count
  attempts++;
  attemptsDisplay.textContent = `You have ${5 - attempts} chances`;

  // Provide feedback based on user's guess
  if (userGuess === randomNumber) {
    feedback.textContent = `Congratulations! You guessed the correct number in ${attempts} attempts!`;
    disableGame(); // Disable further input after winning
  } else if (userGuess < randomNumber) {
    feedback.textContent = "Too low! Try a higher number.";
  } else {
    feedback.textContent = "Too high! Try a lower number.";
  }

  // Check if maximum attempts have been reached
  if (attempts >= maxAttempts) {
    if (userGuess !== randomNumber) {
      feedback.textContent = `Game Over! You've used all ${maxAttempts} attempts. The correct number was ${randomNumber}.`;
    }
    disableGame(); // Disable further input after reaching max attempts
  }
}

// Function to disable the game after winning or reaching the max attempts
function disableGame() {
  document.getElementById("submitGuess").disabled = true;
  document.getElementById("userGuess").disabled = true;
}

// Function to restart the game
function restartGame() {
  attempts = 0;
  document.getElementById("attempts").textContent = "Attempts: 0";
  document.getElementById("feedback").textContent = "";
  document.getElementById("userGuess").value = "";
  document.getElementById("submitGuess").disabled = false;
  document.getElementById("userGuess").disabled = false;
  generateRandomNumber(); // Generate a new random number
}

// Initialize game setup
generateRandomNumber();

// Add event listeners for buttons
document.getElementById("submitGuess").addEventListener("click", handleGuess);
document.getElementById("restartGame").addEventListener("click", restartGame);
