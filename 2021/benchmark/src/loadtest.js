/**
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 12:08:34
 * @LastEditTime: 2019-08-20 12:09:07
 * @LastEditors: Please set LastEditors
 */
const loadtest = require('loadtest');

function statusCallback(error, result, latency) {
    console.log('Current latency %j, result %j, error %j', latency, result, error);
    console.log('----');
    console.log('Request elapsed milliseconds: ', result.requestElapsed);
    console.log('Request index: ', result.requestIndex);
    console.log('Request loadtest() instance index: ', result.instanceIndex);
}

const options = {
    url: 'http://localhost:7357/',
    maxRequests: 1000,
    statusCallback: statusCallback
};

loadtest.loadTest(options, function (error) {
    if (error) {
        return console.error('Got an error: %s', error);
    }
    console.log('Tests run successfully');
});
