// add(1)(2)();

let saveArg = [];
function add() {
  const args = arguments;
  if (args.length) {
    saveArg.push(...args);
    return add;
  } else {
    return saveArg.reduce((p, n) => {
      return p + n;
    });
  }
}

const res = add(1)(2)();

console.log(res);
