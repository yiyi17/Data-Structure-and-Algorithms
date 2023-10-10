// 链表获取json节点
const json = {
  a: { b: { c: 1 } },
  d: { e: 2 },
};

const path = ["a", "b", "c"];

let p = json;

path.forEach((k) => {
  p = p[k];
});
