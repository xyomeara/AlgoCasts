// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//   for (let i = 1; i <= n; i++) {
//     let str = '#'.repeat(i) + ' '.repeat(n - i);
//     console.log(str);
//   }
// }

// function steps(n) {
//   for (let r = 1; r <= n; r++) {
//     let str = '';
//     for (let c = 1; c <= n; c++) {
//       str += c <= r ? '#' : ' ';
//     }
//     console.log(str);
//   }
// }

function steps(n, row = 0, stair = '') {
  if (n === row) return;
  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  stair += stair.length <= row ? '#' : ' ';
  steps(n, row, stair);
}

// function steps(n) {
//   for (let i = 1; i <= n; i++) {
//     let str = '';
//     for (let j = 1; j <= i; j++) {
//       str += '#';
//     }
//     for (let k = i + 1; k <= n; k++) {
//       str += ' ';
//     }
//     console.log(str);
//   }
// }

// steps(2)
// steps(3)
// steps(4)

module.exports = steps;
