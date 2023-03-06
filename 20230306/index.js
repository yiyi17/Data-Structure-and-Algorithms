// 有效括号
// {[]}
// 先进后出，符合栈的场景

const fn = s => {
  if(s.length % 2 === 1) return false
  const stack = []
  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    if(c === '(' || c ==='[' || c === '{') {
      c.push(c)
    }else {
      t = stack[stack.length - 1]
      if(
        (t === '{' && c === '}')
        (t === '(' && c === ')')
        (t === '[' && c === ']')
        ) {
        stack.pop()
      }else{
        return false
      }
    }
  }
  return stack.length === 0

}
