const fs = require("fs");
const path = require("path");

function plus(a, b) {
  return a + b;
}
function minus(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

module.exports = {
  plus,
  minus,
  multiply,
  divide,
  modulo,
};
