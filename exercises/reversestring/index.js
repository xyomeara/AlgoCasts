// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// // reverse()
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// // for of loop
// function reverse(str) {
//   let reversed = '';
//   for (let char of str) {
//     reversed = char + reversed;
//   }

//   return reversed;
// }

// // forEach
// function reverse(str) {
//   let reversed = '';
//   str.split('').forEach((char) => (reversed = char + reversed));

//   return reversed;
// }

// reduce
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;
