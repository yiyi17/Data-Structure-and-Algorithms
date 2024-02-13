// 函数柯里化

// 柯里化是指这样一个函数(假设叫做createCurry)，他接收函数A作为参数，运行后能够返回一个新的函数。并且这个新的函数能够处理函数A的剩余参数。

function add(a, b, c) {
    return a + b + c;
}

// 函数add被createCurry转化之后得到柯里化函数_add，_add能够处理add的所有剩余参数
// 因此柯里化也被称为部分求值。
function _add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

// add与_add运算方式等价
add(1, 2, 3);
_add(1)(2)(3);


// 柯里化函数的运行过程其实是一个参数的收集过程

// 收集参数、判断参数是否少、执行代码
// function createCurry(func, args) {
    
//     // func函数形参数
//     var arity = func.length;
//     // 收集参数
//     var args = args || []

//     return function () {
//         // 深拷贝
//         var _args = [].slice.call(arguments);
//         // 将args push到_args
//         // 此处形成了闭包
//         [].push.apply(_args, args)
//         // 如果参数个数小于最初的func.length，则递归调用，继续收集参数
//         if(_args.length < arity) {
//             // 递归调用，将func和_args传回去
//             return createCurry.call(this, func, _args)
//         }

//         // 执行最终的函数
//         return func.apply(this, _args)
//     }
// }

// 收集参数、判断参数是否少、执行代码
function createCurry(fn,args) {
    args = args ||[]
    return function() {
        var _args = [].slice.call(arguments)
        _args.push(...args)
        if(_args.length < fn.length) {
             return createCurry(fn, _args)
        }
        return fn(..._args)
    }
}

function check(targetString, reg) {
    return reg.test(targetString);
}
var _check = createCurry(check)
var checkPhone = _check(/^1[34578]\d{9}$/);
var checkEmail = _check(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/)
console.log(checkPhone('183888888'));;
checkEmail('xxxxx@test.com');
