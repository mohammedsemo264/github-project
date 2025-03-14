const getRandomTsCode = () => {
  const codes = {
    "0": ["let", "const"],
    "1": ["async", "await"],
    "2": ["try", "catch"],
    "3": ["if", "else"],
    "4": ["for", "of"],
    "5": ["while", "do"],
    "6": ["switch", "case"],
  };
  const randomKey = Math.floor(Math.random() * codes.length);
  return `${codes[randomKey][0]} ${codes[randomKey][1]}`;
};
