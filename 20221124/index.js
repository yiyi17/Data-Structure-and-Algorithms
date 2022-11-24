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


// 模版字符串
function renderTemplate(template, data) {

  const reg = /\$\{(\w+)\}/ // 模板字符串正则
  if (reg.test(template)) { // 判断模板里是否有模板字符串
      const name = reg.exec(template)[1]; // 查找当前模板里第一个模板字符串的字段
      template = template.replace(reg, data[name]); // 将第一个模板字符串渲染
      return render(template, data); // 递归的渲染并返回渲染后的结构
  }
  return template; // 如果模板没有模板字符串直接返回
}
let template = '我是${name}，年龄${age}，性别${sex}';
let person = {
    name: '布兰',
    age: 12
}
const str = renderTemplate(template, person); // 我是布兰，年龄12，性别undefined
console.log(str);

