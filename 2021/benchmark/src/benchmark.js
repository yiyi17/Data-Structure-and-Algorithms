/**
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 15:24:13
 * @LastEditTime: 2019-08-28 15:45:02
 * @LastEditors: Please set LastEditors
 */

const Benchmark = require('benchmark');
let suite = new Benchmark.Suite('foo', {});

console.log(String(Benchmark.platform));

const arr =  new Array(100000).fill(1);
// const arr = []
suite.add('for_normal', () => {
    for (let i = 0; i < arr.length; i++) {
    }
})
    .add('for正序-inTurn', () => {
        for (let i = 0, len = arr.length; i < len; i++) {
        }
    })
    .add('for倒序-invertedOrder', () => {
        for (let i = arr.length; i--;) {
        }
    })
    .add('for_in', () => {
        for (let i in arr) { }
    })
    .add('for_of', () => {
        for (let i of arr) { }
    })
    .add('for_map', () => {
        arr.map(item => { })
    })
    .add('for_each', () => {
        arr.forEach(item => { })
    })
    .add('for_while', () => {
        let i = 0
        let len = arr.length
        while (i < len) {
            i++
        }
    })
    .add('while_normal', () => {
        let i = 0
        while (i < arr.length) {
            i++
        }
    })
    .on('cycle', event => {
        console.log(String(event.target));
    })
    .on('complete', function () {
        // console.log(this);

        // console.log(this.filter('fastest'));
        const fastest = this.filter('fastest').map('name');
        console.log(`Fastest is ${fastest}`);
    })
    .run({ 'async': true });



    /**
        aliNode.js 10.16.3 on Linux 64-bit
        Node.js 10.16.3 on Linux 64-bit
        for_normal x 12,978 ops/sec ±0.60% (94 runs sampled)
        for正序-inTurn x 13,022 ops/sec ±0.57% (89 runs sampled)
        for倒序-invertedOrder x 12,826 ops/sec ±1.20% (93 runs sampled)
        for_in x 78.76 ops/sec ±1.61% (69 runs sampled)
        for_of x 892 ops/sec ±0.74% (90 runs sampled)
        for_map x 65.35 ops/sec ±0.94% (67 runs sampled)
        for_each x 740 ops/sec ±0.25% (94 runs sampled)
        for_while x 13,151 ops/sec ±0.33% (91 runs sampled)
        while_normal x 12,976 ops/sec ±0.58% (95 runs sampled)
        Fastest is for_while









    */
