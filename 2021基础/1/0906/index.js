// 字符串插值;
const data1 = {
  asd: {
    ddd: ["bbb"],
  },
};
const data2 = {
  ccc: 666,
};
const template = (str, data) => {
  // 正则匹配
  // ${data.asd.ddd.0}
  const reg = /\$\{(.+[^}])\}/g;
  const tempStr = str.match(reg)[0].replace("${data.", "").replace("}", "");
  console.log(tempStr);

  let arr = tempStr.split(".");

  // 第0个赋值
  let resTemp = data[arr[0]];

  // 遍历查询
  for (let i = 1; i < arr.length; i++) {
    if (resTemp[arr[i]]) {
      resTemp = resTemp[arr[i]];
    } else {
      resTemp = undefined;
    }
  }
  let res = resTemp;

  // 数组转换
  if (res !== undefined) {
    res = Array.from(new Set(resTemp.split(""))).join("");
  }
  return str.replace(reg, res);
};

console.log(template("pre_${data.asd.ddd.0}_tail", data1));

// pre_b_tail;

// console.log(template("pre_${data.ccc}_tail", data2));

// pre_666_tail;
