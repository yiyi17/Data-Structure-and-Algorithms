// 构造函数new 
// return 对象 与字符串
// 考察构造函数实例化地址改变
function Fn() {
    return '1'
}

function Fn2() {
    return {
        a:1
    }
}
const fn = new Fn()
console.log(fn);

const fn2 = new Fn2()
console.log(fn2);