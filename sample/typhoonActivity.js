/*
* @Discription: a sample for using typhoon
*/

'use strict';
const typhoon=require('typhoon');
typhoon.typhoonActivity().then(data=>{
	console.log(data)
}).catch(err=>{
	console.error(err)
})