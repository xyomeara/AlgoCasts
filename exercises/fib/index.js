// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//   const fib = [0, 1];
//   while (fib.length <= n){
//     fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
//   }
//   return fib[fib.length - 1];
// }

function fib(n, cache = {}) {
  if (cache[n]) return cache[n];
  if (n === 0) return (cache[0] = 0);
  if (n === 1) return (cache[1] = 1);
  return (cache[n] = fib(n - 1, cache) + fib(n - 2, cache));
}

// function fib(n) {
//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   return fib(n - 1) + fib(n - 2);
// }

// function memorize(fn) {
//   const cache = {};
//   return function (...args) {
//     if (cache[args]) return cache[args];
//     let result = fn(...args);
//     cache[args] = result;
//     return result;
//   };
// }

// fib = memorize(fib);

module.exports = fib;
