const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return (arr.reduce((acc, current) => acc + current, 0));
};

const multiply = function(arr) {
  return (arr.reduce((acc, current) => acc * current));
};

const power = function(a, b) {
	return (Math.pow(a, b));
};

const factorial = function(a) {
  if (a === 1 || a === 0) return 1;
  else return (factorial(a-1) * a);  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
