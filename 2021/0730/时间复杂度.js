// 时间复杂度

// O(1) : 每一行被执行一次
let i = 1
i += 1

// O(n)：第9行被执行了n次
for(let i =0; i<n; i++){
    console.log(i);
}; 

// O(1) + O(n) = O(n)
let i = 1
i += 1
for(let i =0; i<n; i++){
    console.log(i);
}; 

// O(n) * O(n)=O(n的2次方)
for(let i = 0; i <n; i++){
    for(let j = 0; j < n; j++) {
        console.log(i,j);
    }
}

// O(logN)

let i = 1
while (i < n) {
    console.log(i);
    i *=2
}

