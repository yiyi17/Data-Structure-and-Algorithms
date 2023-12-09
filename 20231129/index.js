// nextTick和setImmediate的区别是什么

// setImmediate()方法将回调函数放在事件循环的检查阶段之后执行，这意味着它会在当前阶段结束后尽快执行。
// 与setTimeout()不同，setImmediate()的回调函数不会延迟执行，即使设置了延迟时间参数。
setImmediate(() => {
  console.log(2);
}, 0);

// process.nextTick()的回调函数会在事件循环的下一个阶段执行，而不是在当前阶段结束之后。
process.nextTick(() => {
  console.log(1);
});

// 主要区别在于它们在事件循环中的执行顺序。process.nextTick()的回调函数会在当前操作完成后立即执行，
// 而setImmediate()的回调函数会在下一个检查阶段执行。

// 输出
// 1
// 2
