
const str = '   hello     world   '
delExtraSpace(str)

function delExtraSpace(str: string): string {
  let length = str.length, left = length - 1, right = 0
  while(right < length && str[right] === ' ') {
    right ++
  }
  while(left >= 0 && str[left] === ' ') {
    left--
  }
  const newStr = str.substring(right,left + 1)

  newStr
  
  let step = 0
  let newStr1 = ''
  while(step < newStr.length) {
    if(newStr[step] === ' ' && newStr[step-1] ===' ') {
      step++
      continue
    }
    newStr1 += newStr[step]
    step++
  }
  console.log(newStr1.split(' '));

  return newStr1
}

const str1 = 'hello'
reverseWord(str1.split(''))
function reverseWord(str:string[]): string {
  let start = 0, end = str.length - 1
  while(start < end) {
    let temp = str[end]
    temp
    str[end] = str[start]
    str[start] = temp
    start++
    end--    
  }
  const result = str.join('')
  result

  return result
}
