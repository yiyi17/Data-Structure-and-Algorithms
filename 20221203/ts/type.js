// @ts-check

import d from './index2'

console.log("js 加载 ts 文件：",d);


/** @type {number} */
var x;

x = 1

// @ts-expect-error
x = false

// @ts-ignore
x='str'

x = []




