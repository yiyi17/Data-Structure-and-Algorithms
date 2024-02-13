/**
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-22 15:12:58
 * @LastEditTime: 2019-08-22 15:15:38
 * @LastEditors: Please set LastEditors
 */
const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'content-type':'text/plain'});
    res.end('hello world');
})
.listen(3002)
console.log('Server running at http://127.0.0.1:8888/');
