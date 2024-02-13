var hotClient = require('webpack-hot-middleware/client');
// 添加一个订阅事件，当监听到 event.action === 'reload' 时执行页面刷新
hotClient.subscribe(function (event) {
    console.log(event);

    if (event.action === 'reload') {
        window.location.reload()
    }
})
