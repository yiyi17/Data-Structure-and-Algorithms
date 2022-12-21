// 设计一个请求，并可以中断请求

// 串联同步执行并发请求

// • 根据每个请求的 uniqueId 变量作为唯一令牌
// • 队列里面维护一个结果数组和一个执行队列，把执行队列完成的 令牌与结果 存储在结果数组里面
// • 根据唯一令牌，一直去获取执行完成的结果，间隔 200 毫秒，超时等待时间为 10 分钟
// • 一直等待并获取结果，等待到有结果时，才返回给请求；并根据令牌把结果数组里面相应的项删除

class Recorder {
  private list: any[];
  private queueList: any[];
  private intervalTimer;
  constructor() {
      this.list = [];
      this.queueList = [];
      this.intervalTimer = null;
  }
  // 根据 id 获取任务结果
  public get(id: string) {
      let data;
      console.log('this.list: ', this.list);
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
      console.log('item: ', item);
      // 执行队列的回调
      const data = await item.callback();
      console.log('回调执行完成: ', data);
      // 把结果放进 结果数组
      this.list.push({ id: item.id, data });
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

export default recorder;