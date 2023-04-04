const readline = require("readline");
const colors = require("colors");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your expression: ".red, (expression) => {
  const result = eval(expression);
  console.log(`${result}`.red);
  rl.close();
});
