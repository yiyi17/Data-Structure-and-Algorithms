// try catch 只能捕获同步错误，看看下面哪些可以不会错误

try {
  throw 'error';
} catch (error) {
  console.log(error); // 'error'
}

try {
  setTimeout(() => {
    throw 'err';
  });
} catch (error) {
  console.log(error); // 捕获不到
}

try {
  Promise.reject('error');
} catch (error) {
  console.log(error); // 捕获不到。正常的 Promise 对象，不是错误
}

function getData() {
  return Promise.reject('遇到了一些错误');
}
function click() {
  try {
    const a = getData();
    console.log(a);
  } catch (e) {
    console.log(e); // 捕获不到，getData 返回的是正常的 Promise 对象，不是错误
  }
}
click();
