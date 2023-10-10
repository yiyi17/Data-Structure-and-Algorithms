// add(1)(2)(3) 6
// add(1)(2)(3)(4) 10

function add() {
  // 保存变量
  let arg = [].slice.call(arguments);
  // 加和计算

  function _adder() {
    const _arg = [].slice.call(arguments);
    arg.push(..._arg);
    console.log(_arg);

    _adder.toString = function() {
      const res = arg.reduce((previous, current) => {
        return previous + current;
      });

      return res;
    };
    return _adder;
  }

  return _adder;
}

const a = add(1, 2)(3);
console.log(a + 1);
