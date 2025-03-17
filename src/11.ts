// Function to generate a random number between 1 and 10
function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// Function to check if the number is even or odd
function isEven(num: number) {
  return num % 2 === 0;
}

// Testing the functions
console.log(getRandomNumber()); // Output: 6
console.log(isEven(getRandomNumber())); // Output: true (since 6 is an even number)
