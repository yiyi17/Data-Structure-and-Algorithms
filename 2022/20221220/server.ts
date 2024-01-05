const Koa = require('koa')
const Router = require('koa-router')
const cuid = require('cuid');
const bodyParser = require('koa-bodyparser')
import recorder from "./recorder";

const MAX_WAITING_TIME = 60 * 5; // 最大等待时长
// web服务端口
const SERVER_PORT: number = 3000;
const app = new Koa();
app.use(bodyParser());
const router = new Router();


/**
 * 程序睡眠
 * @param time 毫秒
 */
const timeSleep = (time: number) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("");
        }, time);
    });
};

/**
 * 程序睡眠
 * @param second 秒
 */
const sleep = (second: number) => {
    return timeSleep(second * 1000);
};

router.post("/getPort", async (ctx, next) => {
    const { num } = ctx.request.body;
    const uniqueId = cuid();
    console.log('uniqueId: ', uniqueId);
    recorder.addQueue({
        id: uniqueId,
        callback: getPortFun(num)
    });
    let waitTime = 0;
    while (!ctx.body) {
        await sleep(0.2);
        console.log('1');
        const data: any = recorder.get(uniqueId);
        if (data) {
            ctx.body = {
                code: 0,
                data: data,
                msg: 'success'
            };
        }
        waitTime++;
        // 超过最大时间就返回一个结果
        if (waitTime > MAX_WAITING_TIME) {
            ctx.body = {};
        }
    }
});

// 返回一个函数
function getPortFun(num) {
    return () => {
        return new Promise((resolve) => {
            // 模拟异步程序
            setTimeout(() => {
                console.log(`num${num}: `, num);
                resolve(num * num);
            }, num * 1000);
        });
    };
}

app.use(router.routes()).use(router.allowedMethods());

app.listen(SERVER_PORT);