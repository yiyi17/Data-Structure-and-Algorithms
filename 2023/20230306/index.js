// 有效括号
// {[]}
// 先进后出，符合栈的场景
/**
 * Checks if a string of parentheses, square brackets, and curly braces is balanced.
 * @param {string} s - The input string.
 * @returns {boolean} - True if the string is balanced, false otherwise.
 */
const fn = (s) => {
  if (s.length % 2 === 1) return false; // If the string length is odd, it cannot be balanced.
  const stack = []; // Create an empty stack to keep track of opening parentheses, square brackets, and curly braces.

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    if (c === '(' || c === '[' || c === '{') {
      stack.push(c); // Push opening parentheses, square brackets, and curly braces onto the stack.
    } else {
      const t = stack[stack.length - 1]; // Get the top element of the stack.

      if (
        (t === '{' && c === '}') ||
        (t === '(' && c === ')') ||
        (t === '[' && c === ']')
      ) {
        stack.pop(); // If the closing parenthesis, square bracket, or curly brace matches the top element of the stack, pop the element from the stack.
      } else {
        return false; // If the closing parenthesis, square bracket, or curly brace does not match the top element of the stack, the string is not balanced.
      }
    }
  }

  return stack.length === 0; // If the stack is empty after processing all characters, the string is balanced.
};
