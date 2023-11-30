// async hooks
import { AsyncLocalStorage } from "node:async_hooks";
import http from "node:http";

const asyncLocalStorage = new AsyncLocalStorage();

function logWithId(msg) {
  const { id } = asyncLocalStorage.getStore();
  console.log(id, msg);
}

let idSeq = 0;
http
  .createServer((req, res) => {
    asyncLocalStorage.run({ id: idSeq++ }, () => {
      logWithId("start");
      // 内部的子流程仍然可以通过 getStore 获取到数据
      setImmediate(() => {
        logWithId("finish");
        res.end();
      });
    });
  })
  .listen(8080);

// 并行触发两个异步流程
http.get("http://localhost:8080");
http.get("http://localhost:8080");
