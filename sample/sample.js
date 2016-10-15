/*
* @Discription: a sample for using node-typhoon
*/

'use strict';
const Typhoon=require('../index.js');

Typhoon.typhoonActivity().then(data=>{
	console.info("============typhoonActivity()===================");
	console.log(data);
	
}).catch(err=>{
	console.error(err)
});

Typhoon.typhoonList(2016).then(data=>{
	console.info("------------------typhoonList()-----------------");
	console.log(data);
}).catch(err=>{
	console.error(err);
});