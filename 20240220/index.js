function factorial(n, result = 1) {
  if (n < 2) {
      return result;
  }
  return factorial(n - 1, n * result);
}
console.log(factorial(5)) // 120;

