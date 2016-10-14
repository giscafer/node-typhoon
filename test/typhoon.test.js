/**
 * Mocha BDD Test
 * @author giscafer <giscafer@outlook.com>
 */
var should=require('chai').should();
var typhoon=require('../lib/typhoon.js');
describe('typhoon.test.js',function(){
	describe('test typhoonActivity()',function(){
		it('The request is successful and return data',function(done){
			typhoon.typhoonActivity().then(data=>{
				// console.log(data)
				data.should.not.be.null;
				done();
			})
		});
	});
	describe('test typhoonList(year)',function(){
		it('The request is successful and return data',function(done){
			typhoon.typhoonList().then(data=>{
				// console.log(data)
				data.should.not.be.null;
				done();
			})
		});
	});
});