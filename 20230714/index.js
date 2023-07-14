
// 将两个数组对象合并，如果key相同，后面的覆盖前面的

function join(arr1, arr2) {
  let arr = arr1.concat(arr2)
  const map = new Map()
  arr.forEach(item => {
      if(!map.has(item.id)) {
        map.set(item.id, item)
      }else {
        map.set(item.id, {
          ...map.get(item.id),
          ...item
        })
      }
  });
  return [...map.values()]
}

const arr1 = [{
  id: 1,
  a: 2,
  b: 3
}]

const arr2 = [
  {
    id: 1,
    a: {b:1},
    d: 4
  }
]
console.log(join(arr1, arr2));