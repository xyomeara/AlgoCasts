// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
//   const words = str.split(' ');
//   // words.forEach((word, i) => words[i] = word[0].toUpperCase() + word.slice(1).toLowerCase());
//   const capWords = words.map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase());
//   return capWords.join(' ');
// }

// function capitalize(str) {
//   const words = [];
//   for (let word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
//   }
//   return words.join(' ');
// }

function capitalize(str) {
  let newStr =str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    newStr += str[i - 1] === ' '? str[i].toUpperCase() : str[i]
    
  }
  return newStr;
}

console.log(capitalize('a short sentence'));

module.exports = capitalize;
