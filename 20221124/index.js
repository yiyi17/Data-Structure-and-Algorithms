// 数组去重
var unique = arr => [...new Set(arr)]
console.log(unique([1,2,3,2]));

// 数组拍平
console.log(
  [1, [2, [3]]].flat(1)  // [1, 2, 3]
);
function flatten(arr) {
  while(arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}
console.log(flatten([1, [2, [3]]]));


// 深拷贝
function deepClone(obj) {
  if (typeof obj !== 'object') return;
  var newObj = obj instanceof Array ? [] : {};
  for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
          newObj[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key];
      }
  }
  return newObj;
}
