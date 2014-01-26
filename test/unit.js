// Libraries
var chai   = require('chai'),
	should = chai.should();

// Controllers
var prefix = process.cwd()+'/api/controllers/',
	Search = require(prefix+"search");

describe('Unit', function(){
	describe('Search', function(){
		it('should be an instance of Search', function(){
			var search = new Search('string to test');
			search.should.be.an.instanceof(Search);
		})
	})
})