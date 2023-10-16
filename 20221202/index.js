// 一个字符串中不重复字符串的最大长度

/**
 * Calculate the maximum length of consecutive unique characters in a string.
 * 
 * @param {string} str - The input string.
 * @returns {number} - The maximum length of consecutive unique characters.
 */
function maxLength(str) {
  let obj = {}; // Create an empty object to store the unique substrings and their lengths
  let tempStr = ''; // Create a temporary string to store the current substring

  for (let i = 0; i < str.length; i++) {
    if (!tempStr.includes(str[i])) {
      tempStr += str[i]; // Add the current character to the temporary string
    } else {
      obj[tempStr] = tempStr.length; // Store the current substring and its length in the object
      tempStr = str[i]; // Start a new substring with the current character
    }
  }

  return Math.max(...Object.values(obj)); // Find the maximum length from the values in the object
}
const str = 'abdadcaadd1'

console.log(maxLength(str));






