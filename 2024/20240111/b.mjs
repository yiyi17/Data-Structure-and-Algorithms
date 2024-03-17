
// export const B = {
//   b: 'b'
// }

// import {A} from './a.mjs'
// export const BB = {
//   ...A,
//   ...B,
// }

let b = "原始值-b模块内变量"
export { b }

import * as a from "./a.mjs"

console.log("b模块引用a模块：", a)

b = "修改值-b模块内变量"