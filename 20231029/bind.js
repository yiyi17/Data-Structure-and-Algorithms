
function debounce(fn, delay, immediate) {
    let timeout
    return function(...args) {
        const context = this
        const later = function() {
            timeout = null
            if (!immediate) {
                fn.apply(context, args)
            }
        }
        const callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, delay)
        if (callNow) {
            fn.apply(context, args)
        }
    }
}
function throttle(fn, delay) {
  let lastCall = 0
  return function(...args) {
    const now = Date.now()
  if (now - lastCall < delay) {
      return
    }
    lastCall = now
    fn.apply(this, args)
  }
}

Function.prototype.myBind = function(context,...args ){
  console.log(context);
  context.fn = this;
  
  const fn = function() {
  context.fn.apply(context,[...args])
  }
  
  fn.prototype = Object.create(this.prototype)
  fn.prototype.constructor = this;
  
  return fn
}