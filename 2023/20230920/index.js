
// 选择排序


/**
 * Sorts an array using the selection sort algorithm.
 * 
 * @returns {Array} The sorted array.
 */
Array.prototype.selectSort2 = function() {
  // Iterate through the array
  for (let i = 0; i < this.length; i++) {
    // Find the minimum value from the current index to the end of the array
    const min = Math.min(...this.slice(i));
    
    // Find the index of the minimum value
    const index = this.indexOf(min);
    
    // Swap the current element with the minimum value if it exists
    if (index !== -1) {
      [this[i], this[index]] = [this[index], this[i]];
    }
  }
  
  // Return the sorted array
  return this;
};

/**
 * Sorts the elements of an array in ascending order using the selection sort algorithm.
 *
 * @return {Array} The sorted array.
 */
Array.prototype.selectSort = function() {
  // Get the length of the array
  const len = this.length;

  // Iterate over each element in the array
  for (let i = 0; i < len; i++) {
    // Set the current element as the minimum value
    let min = this[i];
    let index = i;

    // Find the minimum value in the remaining subarray
    for (let j = i+1; j < len; j++) {
      // If a smaller value is found, update the minimum value and index
      if(this[j] < min) {
        min = this[j];
        index = j;
      }    
    }

    // Swap the current element with the minimum value if necessary
    if(index !== i) {
      [this[i], this[index]] = [this[index], this[i]];
    }

    // Add a console.log statement to debug the array after each iteration
    console.log("Array after iteration", i + 1, ":", this);
  }  

  // Return the sorted array
  return this;
};


const arr2 = [3,2,1]

const res = arr2.selectSort2()
console.log(res);




