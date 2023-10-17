
// 在严格模式下的输出
// 'use strict';
let func = function () {
  this.value = 1;
};
let obj = new func();
func.prototype.value = 2;
let value = 3;
func();

console.log(value); // 3
console.log(obj.value);// 1



/**
 * 前端严格模式、非严格模式的区别
 */

// 空间复杂度与时间复杂度
