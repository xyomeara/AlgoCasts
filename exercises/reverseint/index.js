// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// // Math.abs() && while loop
// function reverseInt(n) {
//   let reverseString = Math.abs(n).toString().split('').reverse().join('');
//   while(reverseString[0] === '0') {
//     reverseString = reverseString.slice(1);
//   }

//   return Math.sign(n) * Number(reverseString);
// }

// parseInt()
function reverseInt(n) {
  let reverseString = n.toString().split('').reverse().join('');

  return Math.sign(n) * parseInt(reverseString);
}

module.exports = reverseInt;
