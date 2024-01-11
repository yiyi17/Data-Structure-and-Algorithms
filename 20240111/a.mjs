
// export const A = {a:'a'}

// import {B} from './b.mjs'

// export const AA = {
//   ...A,
//   ...B
// }

import * as b from "./b.mjs"

let a = "原始值-a模块内变量"
export { a }

console.log("a模块引用b模块：", b)
a = "修改值-a模块内变量"
