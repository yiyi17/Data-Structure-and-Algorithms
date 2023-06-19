// Array

// map
const selfMap = function(fn, context) {
  let arr = Array.prototype.slice.call(this)
  let mappedArr = Array()
  for(let i = 0; i < arr.length; i++) {
    if(!arr.hasOwnProperty(i)) continue
    console.log(context);
    mappedArr[i] = fn.call(context, arr[i], i, arr)
  }
  return mappedArr
}
Array.prototype.selfMap = selfMap

const arr = [2,3,4]
const b = arr.selfMap((item, index, arr) => {
  console.log(index, arr);
  return item*2
})
console.log(b);

// filter
const selfFilter = function(fn, context) {
  let arr = Array.prototype.slice.call(this)
  let filteredArr = Array()
  for (let i = 0; i < arr.length; i++) {
    if(!arr.hasOwnProperty(i)) continue
    fn.call(context, arr[i], i, this) && filteredArr.push(arr[i])
  }
  return filteredArr
}
Array.prototype.selfFilter = selfFilter

const c = arr.selfFilter((item, index, array) => item > 2, arr)
console.log(c);

// some
const selfSome = function(fn, context) {
  let arr = Array.prototype.slice.call(this)
  if(!arr.length) return false
  for (let i = 0; i < arr.length; i++) {
      if(!arr.hasOwnProperty(i)) continue
      let res = fn.call(context, arr[i], i, this)
      if(res) return true
  }
  return false
}
Array.prototype.selfSome = selfSome

const d = arr.selfSome((item, index, array) => item > 2, arr)
console.log(d);

// reduce
const selefReduce = function(fn, initialValue) {

  let arr = Array.prototype.slice.call(this)
  let res
  let startIndex
  if(initialValue === undefined) {
    for(let i = 0; i < arr.length; i++) {
      if(!arr.hasOwnProperty(i)) continue
      res = arr[i]
      startIndex = i
      break
    }
  }else {
    res = initialValue
  }

  console.log(res, startIndex);
  for(let i = ++startIndex || 0; i < arr.length; i++) {
    if(!arr.hasOwnProperty(i)) continue
    res = fn.call(this, res, arr[i], i, this)
  }
  return res
}
Array.prototype.selefReduce = selefReduce

const array1 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const initialValue = undefined;
const sumWithInitial = array1.selefReduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log(sumWithInitial);
// Expected output: 10

const selfFlat = function(depth = 1) {
  let arr = Array.prototype.slice.call(this)
  if(depth === 0) return arr
  return arr.reduce((pre,cur) => {
    if(Array.isArray(cur)){ 
      return [...pre, ...selfFlat.call(cur, depth - 1)];
    }else {
      return [...pre, cur]
    }
  }, [])
}
Array.prototype.selfFlat = selfFlat
console.log([[1,[123]]].selfFlat());