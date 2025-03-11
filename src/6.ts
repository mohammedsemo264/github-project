export function getRandomTsCode() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  if (randomNumber <= 5) {
    return "console.log('Hello World!');";
  } else {
    return "const greeting = 'Hello World!'; console.log(greeting);";
  }
}
