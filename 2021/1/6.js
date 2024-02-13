// 手写lodash.get

function lodashGet(source, path, defaultValue) {
  const arr = path.replace(/\[(\d+)\]/g, ".$1").split(".");

  // 浅拷贝
  let result = source;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    result = Object(result)[element];
    if (result === undefined) {
      return defaultValue;
    }
  }
  return result;
}
