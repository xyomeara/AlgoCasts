// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Max value strategy
function maxChar(str) {
  const cache = {};
  str.split('').forEach((e) => (cache[e] = cache[e] + 1 || 1));
  // str.split('').forEach((e) => (cache[e] = (cache[e] || 0) + 1));

  let max = 0;
  let maxChar;

  for (let key in cache) {
    if (cache[key] > max) {
      max = cache[key];
      maxChar = key;
    }
  }

  return maxChar;
}

// // Math.max()
// function maxChar(str) {
//   const cache = {};
//   str.split('').forEach((e) => (cache[e] = cache[e] + 1 || 1));
//   // str.split('').forEach((e) => (cache[e] = (cache[e] || 0) + 1));
//   const max = Math.max(...Object.values(cache));

//   for (let key in cache) {
//     if (cache[key] === max) {
//       return key;
//     }
//   }
// }

module.exports = maxChar;
