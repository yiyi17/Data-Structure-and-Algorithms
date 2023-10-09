
function quickSort(arr) {
  if(arr.length <= 1) return arr;

  const pivotIndex = Math.floor(arr.length / 2)
  const pivot = arr.splice(pivotIndex, 1)[0];
  
  let left = [];
  let right = [];

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] <= pivot) left.push(arr[i]);
    else if(arr[i] > pivot) right.push(arr[i]);
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

/**
 * Sorts an array in ascending order using the insertion sort algorithm.
 *
 * @param {Array} arr - The array to be sorted.
 * @return {Array} - The sorted array.
 */
const insertionSort = function(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}