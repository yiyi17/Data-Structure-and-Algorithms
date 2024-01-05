
class Recorder {
  list: any[];
  private queueList: any[];
  private intervalTimer: any
  constructor() {
      this.list = [];
      this.queueList = [];
      this.intervalTimer = null;
  }
  // 根据 id 获取任务结果
  public get(id: string) {
      let data;
      // console.log('this.list: ', this.list);
      let index;
      for (let i = 0; i < this.list.length; i++) {
          const item = this.list[i];
          if (id === item.id) {
              data = item.data;
              index = i;
              break;
          }
      }
      // 删除获取到结果的项
      if (index !== undefined) {
          this.list.splice(index, 1);
      }
      return data;
  }
  public clear() {
      this.list = [];
      this.queueList = [];
  }
  // 添加项
  public async addQueue(item: any) {
      this.queueList.push(item);
  }
  public async runQueue() {
      clearInterval(this.intervalTimer);
      if (!this.queueList.length) {
          // console.log('队列执行完毕');
          return;
      }
      // 取出队列里面的最后一项
      const item = this.queueList.shift();
      // console.log('item: ', item);
      // 执行队列的回调
      const data = await item.callback();
      // console.log('回调执行完成: ', data);
      // 把结果放进 结果数组
      this.list.push({ id: item.id, data });
      if(!this.queueList.length) {
        console.log(this.list);
        clearInterval(this.intervalTimer);
        process.exit(0)
      }
      
  }
  public interval() {
      clearInterval(this.intervalTimer);
      this.intervalTimer = setInterval(async () => {
          clearInterval(this.intervalTimer);
          // 一直执行里面的任务
          await this.runQueue();
          this.interval();
      }, 200);
  }
}
  const recorder = new Recorder();
    recorder.interval();

    recorder.addQueue({
        id: 'uniqueId',
        callback: getPortFun(1)
    });
  

    // 返回一个函数
    function getPortFun(num:number) {
        return () => {
            return new Promise((resolve) => {
            // 模拟异步程序
                setTimeout(() => {
                    // console.log(`num${num}: `, num);
                    resolve(num * num);
                }, num * 1000);
            });
        };
    }


    