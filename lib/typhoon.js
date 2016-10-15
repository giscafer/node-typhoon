/*
 * Copyright (c) 2016 giscafer 
 * License: MIT
 * https://github.com/giscafer/node-typhoon
 */

'use strict';
const http = require('http');
const api_host_name = 'typhoon.zjwater.gov.cn',
    port = 80,
    method_get = 'GET',
    method_post = 'POST';

let ACTIVITY_OPTION = {
    hostname: api_host_name,
    port: port,
    path: '/Api/TyhoonActivity?callback=giscafer',
    method: method_get
};
let TYPHOONLIST_OPTION = {
    hostname: api_host_name,
    port: port,
    path: '/Api/TyphoonList/',
    method: method_get
};

function _handerResult(res) {
    let restr = res.replace('giscafer', '');
    return restr.substring(1, restr.length - 2);
}
/**
 * @Discription:Get typhoon real-time information
 * @Return {Array} data
 */
function typhoonActivity() {
    return new Promise((resolve, reject) => {
        let req = http.request(ACTIVITY_OPTION, res => {
            res.setEncoding('utf8');
            let size = 0,
                chunks = [];
            res.on('data', chunk => {
                chunks.push(chunk);
            });
            res.on('end', () => {
                try {
                    let data = chunks.join(''),
                        result = {
                            status: res.statusCode,
                            data: JSON.parse(_handerResult(data))
                        };
                    if (res.statusCode === 200) {
                        result['message'] = 'request success!';
                    } else {
                        result['message'] = 'request failure!';
                    }
                    resolve(result);
                } catch (e) {
                    reject(e);
                }
            });
        }).on('error', e => {
            reject('problem with request: ' + e.message);
        });
        req.end();
    });
}
/**
 * @Discription:Get typhoon information during the period of specify year 
 * @Param {String | Number} year
 * @Return {Array} data
 */
function typhoonList(year) {
    return new Promise((resolve, reject) => {
        if (!year || Number.isNaN(year - 0)) {
            year = new Date().getFullYear();
        }
        TYPHOONLIST_OPTION.path = TYPHOONLIST_OPTION.path + year + '?callback=giscafer&_=' + new Date().getTime();
        let req = http.request(TYPHOONLIST_OPTION, res => {
            res.setEncoding('utf8');
            let size = 0,
                chunks = [];
            res.on('data', chunk => {
                chunks.push(chunk);
            });
            res.on('end', () => {
                try {
                    let data = chunks.join(''),
                        result = {
                            status: res.statusCode,
                            data: JSON.parse(_handerResult(data))
                        };
                    if (res.statusCode === 200) {
                        result['message'] = 'request success!';
                    } else {
                        result['message'] = 'request failure!';
                    }
                    resolve(result);
                } catch (e) {
                    reject(e);
                }
            });
        }).on('error', e => {
            reject('problem with request: ' + e.message);
        });
        req.end();
    });
}
module.exports = {
    typhoonActivity,
    typhoonList
}
