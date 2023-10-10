/**
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-28 15:44:37
 * @LastEditTime: 2019-08-28 15:55:08
 * @LastEditors: Please set LastEditors
 */
const fastjson = require('fastjson');
const Benchmark = require('benchmark');
let suite = new Benchmark.Suite('foo', {});
var str = '{"key":"value"}';
var obj = fastjson.stringify({"key":"value"});
console.log(obj);

suite
    .add('fastjson', () => {
        var str = '{"key":"value"}';
        var obj = fastjson.parse(str);
        // console.log(obj);
    })

    .add('json', () => {
        var str = '{"key":"value"}';
        var obj = JSON.parse(str);
        // console.log(obj);
    })

    .on('cycle', event => {
        console.log(String(event.target));
    })

    .on('complete', function () {
        const fastest = this.filter('fastest').map('name');
        console.log(`Fastest is ${fastest}`);
    })

    .run({ 'async': true });
