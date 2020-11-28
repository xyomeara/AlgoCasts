// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log(' '.repeat(n - i) + '#'.repeat(i + i - 1) + ' '.repeat(n - i));
//   }
// }

function pyramid(n) {
  for (let row = 0; row < n; row++) {
    let level = '';
    for (let col = 0; col < n * 2 - 1; col++) {
      let mid = Math.floor((n * 2 - 1) / 2);
      level += mid - row <= col && mid + row >= col ? '#' : ' ';
      // level += row >= Math.abs(col - mid) ? '#' : ' ';
    }
    console.log(level);
  }
}

// function pyramid(n, row = 0, level = '') {
//   if (row === n) {
//     return;
//   }

//   if (level.length === 2 * n - 1) {
//     console.log(level);
//     return pyramid(n, row + 1);
//   }

//   const midpoint = Math.floor((2 * n - 1) / 2);
//   let add =
//     midpoint - row <= level.length && midpoint + row >= level.length
//       ? '#'
//       : ' ';

//   pyramid(n, row, level + add);
// }

module.exports = pyramid;
