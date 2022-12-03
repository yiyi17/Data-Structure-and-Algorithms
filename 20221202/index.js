const str = 'abdadcaadd1'

// 计数、判断
let obj = {}
let tempStr = ''
for(let i = 0; i < str.length; i++) {
  if(!tempStr.includes(str[i])) {
    tempStr+= str[i]
    continue
  }else {
    obj[tempStr] = tempStr.length
    tempStr = ''
  }
}


console.log(obj,Math.max(...Object.values(obj)));


const str2 = 'aa123bbccc'






