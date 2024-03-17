function sumArray(arr, total) {
  if (arr.length === 0) {
    return total
  }
  return sumArray(arr, total + arr.pop())
}

console.log(sumArray([1, 2, 3, 4, 5], 0));//15