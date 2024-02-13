/**
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-21 14:45:55
 * @LastEditTime: 2019-08-19 17:26:16
 * @LastEditors: Please set LastEditors
 */

console.log('%c  benchmarkjs.com/  ','background:#f66;color:#fff;height:30px;line-height:30px;font-size:16px;');


/**
 * 网页版jsperf.com/

 * 1、谷歌浏览器中ES6+的循环语法会普遍比传统的循环语法慢，但是火狐和safari中情况却几乎相反。
 * 2、谷歌浏览器的各种循环语法的执行耗时上差距并不大。但map特殊，速度明显比其他几种语法慢，而在火狐和safari中却出现了反转，map反而比较快！

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

 *
 *
 *
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

function list(){
  const arr = new Array(100000).fill(1);
  for (let i = 0; i < arr.length; i++) {
  }
}

heapRecord(list)
