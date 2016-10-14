/*
* Copyright (c) 2016 giscafer 
* License: MIT
* https://github.com/giscafer/typhoon
*/

'use strict';
const request = require('superagent');
const TYHOONACTIVITY_URL = "http://typhoon.zjwater.gov.cn/Api/TyhoonActivity";
const TYPHOONLIST_URL = "http://typhoon.zjwater.gov.cn/Api/TyphoonList/";
/**
 * @Discription:Get typhoon real-time information
 * @Return {Array} data
 */
function typhoonActivity() {
    return new Promise((resolve, reject) => {
    	console.log(1)
        let req = request.get(TYHOONACTIVITY_URL).end((err, res) => {
            if (err) {
                reject(err);
            } else {
              	resolve(res.text);
            }
        });
    });
}
/**
 * @Discription:Get typhoon information during the period of specify year 
 * @Param {String | Number} year
 * @Return {Array} data
 */
function typhoonList(year) {
    return new Promise((resolve, reject) => {
    	if(!year || Number.isNaN(year-0)){
    		year=new Date().getFullYear();
    	}
        let req = request.get(TYPHOONLIST_URL+year).end((err, res) => {
            if (err) {
                reject(err);
            } else {
              	resolve(res.text);
            }
        });
    });
}
module.exports = {
    typhoonActivity,typhoonList
}