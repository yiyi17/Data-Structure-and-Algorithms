// Promise 的调度

class Scheduler {
  queue: any[]
  maxCount: number
  pendingCount: number
  resolveQueue: any[]
  constructor() {
    this.queue = []
    this.resolveQueue = []
    this.maxCount = 2
    this.pendingCount = 0
  }
  request(resolve: { (value: unknown): void; (arg0: any): void }) {
    const task = this.queue.shift()
    if (task) {
      task().then((res: unknown) => {
        this.pendingCount--
        resolve(res)
        if(this.resolveQueue.length) {
          // 取出待执行的 resolve
          this.request(this.resolveQueue.shift())
        }
      })
    }
  }
  add(promiseCreator: () => Promise<unknown>) { 
    return new Promise((resolve, reject) => {
      // 收集请求
      this.queue.push(promiseCreator)

      // 收集等待的 resolve
      if(this.pendingCount >= this.maxCount) {
        this.resolveQueue.push(resolve)
        return
      }

      this.pendingCount++
      this.request(resolve)
    })
  }
}

const timeout = (time: number | undefined) => new Promise(resolve => { setTimeout(resolve, time)})

const scheduler = new Scheduler()

const addTask = (time: number | undefined, order: string) => {
  scheduler.add(() => timeout(time)).then(() => console.log(order))
}

addTask(1000, '1')

addTask(500, '2')

addTask(300, '3')

addTask(400, '4')