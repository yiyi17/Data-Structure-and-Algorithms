class EmitEvent {
  constructor() {
    this.events = new Map()
  }
  on(name, fn, once=false){
    // 标记 once
    this.events.set(name, this.events.get(name) ?  fns.push({
      once,
      fn
    }) : [{
      once,
      fn
    }])
  }
  emit(name, data) {
    (this.events.get(name) || []).forEach((item) => {
      item.fn(data)
      // 这里需要移除掉 once 的
      if(item.once) {
        this.remove(name, fn)
      }
    })
  }
  remove(name, fn) {
    const fns = this.events.get(name) || []
    this.events.set(name, fns.filter(item => item.fn.toString() !== fn.toString()))
  }

  once(name, fn) {
    this.on(name, fn, true)
    // 执行之后，移除
  }
}

const event = new EmitEvent()
const fn = (a) => {
  console.log(a);
}
event.on('abc', fn)
event.emit('abc', {a:1,b:2})
event.remove('abc', fn)
event.emit('abc', {a:3,b:4})
// event.once('abc', fn)