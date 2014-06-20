var logGen = require('../src/logGen');

module.exports = {

	setUp: function (callback) {
		callback();
    },
    
    tearDown: function (callback) {
        // clean up
        callback();
    },
    
    LogGenTest : function (test) {

    	test.done();
    }
};