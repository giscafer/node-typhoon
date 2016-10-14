/*
* @Discription: a sample for using node-typhoon
*/

'use strict';
const Typhoon=require('node-typhoon');

Typhoon.typhoonActivity().then(data=>{
	console.log(data)
}).catch(err=>{
	console.error(err)
});

Typhoon.typhoonList(2016).then(data=>{
	console.log(data)
}).catch(err=>{
	console.error(err)
});