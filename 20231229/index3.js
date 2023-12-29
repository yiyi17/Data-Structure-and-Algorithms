// excel 
// A:1 B:2 Z:26 AA:27

function fn(col){
  let result = 0
  const map = {
    A: 1,
    B: 2
  }
  for(let i = 0; i < col.length; i++) {
    result = result * 26 + map[col[i]] 
  }
  result
  return result
}
fn('AB')