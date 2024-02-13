// 选择排序
// 选择 第一个没有参与排序的值，找到最小值，与比较的数换位置

// 如果第一个比第二个大则交换，最后一个数最大的，

// 时间复杂度O(n^2)
Array.prototype.selectionSort = function() {
    for (let i = 0; i < this.length; i++) {
        let indexMin = i;
        for (let j = i; j < this.length; j++) {
            const element = this[j];
            if(element < this[indexMin]) {
                indexMin = j
            }
        }
    
       if(indexMin !== i) {
        const temp = this[i]
        this[i] = this[indexMin]
        this[indexMin] = temp
       }
        
    }
    return this
 }
 
 const arr =[5, 4,3,2,1]
 
 const res = arr.selectionSort()
 console.log(res,arr);