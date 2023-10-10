/**
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 15:31:04
 * @LastEditTime: 2019-08-16 16:22:52
 * @LastEditors: Please set LastEditors
 */


function heapRecord(fun) {
    if (process) {
        const startHeap = process.memoryUsage().heapUsed
        fun()
        const endHeap = process.memoryUsage().heapUsed
        const heapDiff = endHeap - startHeap
        console.log('已用到的堆的差值: ', heapDiff)
    } else {
        fun()
    }
}

const arr = new Array(100000).fill(1);
