function getRandomTsCode(): string {
  // Generate a random number between 1 and 100
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  // Return the code based on the random number
  if (randomNumber <= 25) {
    return 'console.log("Hello, world!");';
  } else if (randomNumber <= 50) {
    return 'const name = "Alice"; console.log(`Hello, ${name}!`);';
  } else if (randomNumber <= 75) {
    return 'function add(a: number, b: number): number { return a + b; } console.log(add(3, 4));';
  } else {
    return 'const names = ["Alice", "Bob", "Charlie"]; console.log(names);';
  }
}
