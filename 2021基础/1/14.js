// 有一群羊围成一圈吃草（100只羊），每只羊身上挂着一个数字，现在从任意一只羊开始从1数，当数到3时，将此羊牵出，然后丛下一只羊开始继续从1往后数，再数到3时牵出，以次往复，直到剩下一只羊为止，牵出，请按照羊牵出的顺序打印羊身上的数字。


function arrayHandle(arr) {
    let res = []

    const backtrack = (path, start) => {

        // console.log(path, start);
        if(arr.length === 0)  {res = res.concat(path); return;};
        
        
        if(arr.length < 3) {
            path.push(arr.splice(0,1))
            backtrack(path, 0)
            return
        }
        
        if(start + 2 > arr.length - 1) {
            path.push(arr.splice(start + 2 - arr.length,1))
            backtrack(path, start + 2 - arr.length)
        }else {
            path.push(arr.splice(start + 2,1))
            backtrack(path, start+2)
        }
       
    } 

    backtrack([], 0)

    // console.log(res);
    res.forEach((item => {
        console.log(item[0] && item[0].val)
    }))

}


const list = []
for(let i = 1; i <= 100; i++) {
    list.push({val:i})
}

arrayHandle(list)
// arrayHandle([{val:1},{val:2},{val:3},{val: 4}])
