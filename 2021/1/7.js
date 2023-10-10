
let person = function(){
    
}
let no = new person()
// no instanceof person//true
// [] instanceof Array

// 主要的实现原理就是只要右边变量的 prototype 在左边变量的原型链上即可
function newInstanceOf(leftValue, rightValue) {
    const rightProto = rightValue.prototype
    leftValue = leftValue.__proto__

    while(true) {
        if(leftValue === null) {
            return false
        }
        if(leftValue === rightProto) {
            return true
        }

        leftValue = leftValue.__proto__
    }
}

console.log(newInstanceOf(no, person));