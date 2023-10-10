class MessageCenter {
  constructor() {
    this.eventList = [];
  }
  emit(type, data) {
    // 删除onece的
    const eventList = this.eventList;
    eventList.forEach((event, index) => {
      if (event.type === type) {
        event.fn(data);
        if (event.onece) {
          this.eventList.splice(index, 1);
        }
      }
    });
  }

  on(type, fn) {
    this.eventList.push({ type, fn });
  }

  off(type, fn) {
    const eventIndex = this.eventList.find(
      (event) => event.type === type && event.fn === fn
    );

    if (eventIndex) {
      this.eventList.splice(eventIndex, 1);
    }
  }

  onece(type, fn) {
    this.eventList.push({ type, fn, onece: true });
  }
}

const messageCenter = new MessageCenter();

messageCenter.emit("a", data);

messageCenter.on("a", (data) => {
  console.log(data);
});

const fn = () => {};
messageCenter.off("a", fn);

messageCenter.onece("a", (data) => {});
