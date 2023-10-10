// 递归调用

let arr = []
let res = 0
function add(arg){
    if(typeof arg === 'undefined') {
        if(!arr.length) return 0
         res = arr.reduce((pre,next) => pre + next )
         return res
    }else {
        arr.push(arg)
        // console.log(add);
        return add
    }
}


console.log(add(1)(2)(3)())//0
// add(1)(2)(3)()//6