const { program } = require("commander");
const readline = require("readline");
const colors = require("colors"); // used for changing text colors in the terminal

program.version("1.0.0").description("Simple CLI calculator".green); // if user types 'node index.js' then he will see the instructions how to use it.

program
  .command("calc <expression>") // command to calculate
  .description(" Calculates math expression. Example: node index.js calc '2 + 2'".green) // description of the cli app
  .action((expression) => {
    const result = eval(expression);
    console.log(`Result is: ${result}`.red);
  });

program.parse(process.argv); // launch the app
