// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   if (size >= array.length) return array;
//   const chunk = [];
//   while (array.length > size) {
//     chunk.push(array.splice(0, size));
//   }
//   chunk.push(array);
//   return chunk;
// }

// function chunk(array, size) {
//   if (size >= array.length) return array;
//   const chunk = [];
//   let subChunk = [];
//   for (let i = 0; i < array.length; i++) {
//     if (i % size === 0) subChunk = [];
//     subChunk.push(array[i]);
//     if (i % size === size - 1) {
//       chunk.push(subChunk);
//       subChunk = [];
//     }
//   }
//   if (subChunk.length > 0) chunk.push(subChunk);

//   return chunk;
// }

// function chunk(array, size) {
//   if (size >= array.length) return array;
//   const chunk = [];
//   for (let ele of array) {
//     if (!chunk[chunk.length - 1] || chunk[chunk.length - 1].length === size) {
//       chunk.push([ele]);
//     } else {
//       chunk[chunk.length - 1].push(ele);
//     }
//   }

//   return chunk;
// }

function chunk(array, size) {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

// console.log(chunk([1, 2, 3, 4, 5], 3), ' => [[ 1, 2, 4], [4, 5]]');
// console.log(chunk([1, 2, 3, 4], 2), 'q => [[ 1, 2], [3, 4]]');
// console.log(chunk([1, 2, 3, 4, 5], 2), ' => [[ 1, 2], [3, 4], [5]]');
// console.log(
//   chunk([1, 2, 3, 4, 5, 6, 7, 8], 3),
//   ' => [[ 1, 2, 3], [4, 5, 6], [7, 8]]'
// );
// console.log(chunk([1, 2, 3, 4, 5], 10), ' => [[ 1, 2, 3, 4, 5]]');

module.exports = chunk;
