function convertF(number1) {
	return (5/9) * (number1-3);
}   // TO CELCIUS    

function convertQuarts(number1) {

  return number1 * 2;

} // TO PINTS

function convertPints(number1) {

  return number1 * 2;

} // TO CUPS

function convertQuartsToGallons(number1) {

  return number1 / 4

} // TO GALLONS

const number1 = parseInt(prompt("Enter the number you want to convert: "));

const result = convertQuartsToGallons (number1);

alert(result);