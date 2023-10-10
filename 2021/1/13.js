// 参数的不固定

// 补充知识
//1、 当我们直接将函数参与其他的计算时，函数会默认调用toString方法，直接将函数体转换为字符串参与计算。
//2、

function fn() {return 20}
// valueOf 最终结果
fn.valueOf = function(){return 50}
fn.toString = function(){return 30}
console.log(fn +10);

// function add() {
//     var _args = [].slice.call(arguments)

//     var adder = function () {
//         var _adder = function() {
//             _args.push(...arguments)
//             return _adder
//         }
//         _adder.toString = function() {
//             return _args.reduce((previous, current) => {
//                 return previous + current
//             })
//         }
    
//         return _adder
//     }

//     return adder(..._args)
// }



// function add() {
//     let _args = [].slice.call(arguments)

//      const adder =  function() {
//         let _adder = function() {
//             _args.push(...arguments)
//            return _adder
//         }
//         _adder.toString = function() {
//             return _args.reduce((p, n) => p + n)
//         }

//         return _adder

//     }

//     return adder(..._args)
// }


function add() {
    const _args = [].slice.call(arguments)
    return function adder() {
        _args.push(...arguments)
        adder.toString = () => {
            return _args.reduce((p,n) => p + n)
        }
        return adder
    }
}
add(1)(2)(3) // 6;
add(1, 2, 3)(4) // 10;
const a = add(1)(2)(3)(4)(5) // 15;

console.log(a + 10);
