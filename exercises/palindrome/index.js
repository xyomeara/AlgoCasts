// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// // reverse()
// function palindrome(str) {
//   return str === str.split('').reverse().join('');
// }

// // two pointers
// function palindrome(str) {
//   let [i, j] = [0, str.length - 1];
//   while (i < j) {
//     if (str[i++] !== str[j--]) return false;
//   }

//   return true;
// }

// // for loop
// function palindrome(str) {
//   for (let i = 0; i < Math.floor(str.length / 2); i++) {
//     if (str[i] !== str[str.length - i - 1]) return false;
//   }

//   return true;
// }

// every()
function palindrome(str) {
  return str.split('').every((char, i) => char === str[str.length - 1 - i]);
}

module.exports = palindrome;
