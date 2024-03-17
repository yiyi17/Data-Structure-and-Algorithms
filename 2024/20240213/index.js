// 渡一 web 前端学习频道

// 横线分割的字符串比较,字符串分割需要时相同的
compareString('1-234-5', '1-134-5')
// 字符串比较
function compareString(str1, str2) {
  const iterator1 = walk(str1)
  const iterator2 = walk(str2)
  while(1) {
    const n1 = iterator1.next()
    n1
    const n2 = iterator2.next()
    n2
    if(n1.done && n2.done) {
      console.log('相等')
      return 0
    }else if(n1.done) {
      console.log('str1 较短')
      return -1
    }else if(n2.done) {
      console.log('str2 较短')
      return 1
    }else if(n1.value < n2.value) {
      console.log('str1 较小')
      return -1
    }else if(n1.value > n2.value) {
      console.log('str2 较小')
      return 1
    }

  }
}

function* walk(str) {
  let n = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '-') {
      yield Number(n)
      n = ''
    } else {
      n += str[i]
    }
  }
  if(n) {
    yield Number(n)
  }
}



