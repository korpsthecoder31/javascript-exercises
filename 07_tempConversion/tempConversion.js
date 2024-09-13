const convertToCelsius = function(tempF) {

  let convertedTemp = (tempF - 32) * (5/9)

  return Math.round(convertedTemp * 10) / 10

};

const convertToFahrenheit = function(tempC) {

  let convertedTemp = tempC * (9/5) + 32

  return Math.round(convertedTemp * 10) / 10

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
