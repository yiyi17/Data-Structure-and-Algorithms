// var sql = [];
// var tree = [
//   { id: 1, pid: 0, name: 'a' },
//   { id: 2, pid: 1, name: 'a1' },
//   { id: 3, pid: 1, name: 'a2' },
//   { id: 4, pid: 3, name: 'a201' },
//   { id: 5, pid: 3, name: 'a202' },
//   { id: 6, pid: 4, name: 'a20101' },
// ];
// var table = 'chn'; // 表名
// var fields = 'pid, name'; // 字段名：父id、名称
// var id = 'id'; // tree对象id
// var pid = 'pid'; // tree对象父id
// var value = 'name'; // tree对象value

// function recursionFun(tree) {
//   tree.forEach((obj) => {
//     var parentId = obj[pid] == 0 ? 0 : `@parentId${obj[pid]}`; // 第一级pid为0
//     sql.push(`INSERT INTO ${table} (${fields}) VALUES (${parentId},'${obj[value]}');`);
//     sql.push(`SELECT @parentId${obj[id]} := LAST_INSERT_ID();`);
//   });

//   tree.forEach((obj) => {
//     if (obj.children && obj.children.length) {
//       recursionFun(obj.children);
//     }
//   });
// }

// recursionFun(tree);
// sql.join('\n');

// sql;

// const sum0 = (n, prevSum = 0) => {
//   if (n <= 1) return prevSum + n;
//   return () => sum0(n-1, n + prevSum)
// }

// const trampoline = f => (...args) => {
//   let result = f(...args);

//   while (typeof result === 'function') {
//     result = result();
//   }

//   return result;
// }


// const sum = trampoline(sum0);

