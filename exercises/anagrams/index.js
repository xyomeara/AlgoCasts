// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// use sort() to sort strings
function anagrams(stringA, stringB) {
  stringA = stringA
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
  stringB = stringB
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');

  return stringA === stringB;
}

// // build charactor map
// function anagrams(stringA, stringB) {
//   stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
//   stringB = stringB.replace(/[^\w]/g, '').toLowerCase();
//   if (stringA.length !== stringB.length) return false;

//   const cache1 = {};
//   stringA.split('').forEach((e) => (cache1[e] = (cache1[e] || 0) + 1));
//   const cache2 = {};
//   stringB.split('').forEach((e) => (cache2[e] = cache2[e] + 1 || 1));

//   for (let key in cache1) {
//     if (cache1[key] !== cache2[key]) return false;
//   }

//   return true;
// }

// console.log(anagrams('rail safety', 'fairy tales'));
// console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));
// console.log(anagrams('Hi there', 'Bye there'));

module.exports = anagrams;
