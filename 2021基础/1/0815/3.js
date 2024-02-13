// 字符串反转

// 基数 偶数
// 分、合
function str(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  if (!a.length % 2) {
    const c = a + a;
    return c.includes(b);
  }

  const mid = Math.floor(a.length / 2);
  const left = a.slice(0, mid);
  const right = a.slice(mid + 1, a.length - 1);
  const temp = right + a.slice(mid, mid + 1) + left;

  //   console.log(a.length % 2, temp);
  return temp === b;
}

const a = "abcde";
const b = "decab";
// console.log(a[1]);
// for (let index = 0; index < a.length; index++) {
//   const element = a[index];
//   console.log(element);
// }
console.log(str(a, b));
// console.log(a.slice(0, 1));
// console.log("abc".includes("a", 0));
