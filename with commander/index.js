const operators = require("./operators/operators");
const { program } = require("commander");

function invokeAction({ action, a, b }) {
  switch (action) {
    case "plus":
      const sum = operators.plus(3, b);
      console.log(sum);
      break;
    case "minus":
      const difference = operators.minus(a, b);
      console.log(difference);
      break;

    case "multiply":
      const multiplyResult = operators.multiply(a, b);
      console.log(multiplyResult);
      break;

    case "divide":
      const divideResult = operators.divide(a, b);
      console.log(divideResult);
      break;

    case "modulo":
      const moduloResult = operators.modulo(a, b);
      console.log(moduloResult);
      break;

    default:
      console.warn("Unknown action type!".red);
      break;
  }
}

program
  .option("-o, --operator <operator>", "Operator")
  .option("-od, --operand <operand>", "Operand");

const options = program.opts();

invokeAction(options);
