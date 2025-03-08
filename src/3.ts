function getRandomTsCode() {
  const codes = ["const", "let", "var"];
  const code = codes[Math.floor(Math.random() * codes.length)];
  return code;
}
