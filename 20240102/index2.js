// Reflect Proxy

const target = {
  a:1
}
const handler = function () {
  console.log(arguments);
}
const proxy = new Proxy(target, handler)

proxy.a = 2