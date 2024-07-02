const convertToCelsius = function(fahren) {
  let celsuis = (fahren - 32) * (5/9);
  return (Math.round(celsuis*10) / 10);
};

const convertToFahrenheit = function(celsuis) {
  let fahren = celsuis * (9/5) + 32;
  return (Math.round(fahren * 10) / 10);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
