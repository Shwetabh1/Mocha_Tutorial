let assert = require('chai').assert; //follows TDD style
let sayHello = require('../index.js').sayHello();

/* 
 * The assert style is exposed through assert interface.
 * In all cases, the assert style allows you to include an optional message as the last parameter in the assert statement.
 * These will be included in the error messages should your assertion not pass.
 */

describe(__filename, function() {
    describe('Say Hello Function', function() {
        it('returns hello', function() {
            assert.equal(sayHello, 'hello');
        })
        it('should has a length of 5', function() {
            assert.lengthOf(sayHello, 5);
        })
        it('type must be a string', function() {
            assert.typeOf(sayHello, 'string');
        })
    })

    describe('Demonstration of other methods of assert', function() {
    	it('demonstrates equality methods correctly', function() {
    		assert.notEqual(3, 4, 'these numbers are not equal');
    		assert.deepEqual({ tea: 'green' }, { tea: 'green' });
			assert.notDeepEqual({ tea: 'green' }, { tea: 'jasmine'});
    	})
    	it('demonstrates comparison methods correctly', function() {
    		assert.isAbove(5, 2, '5 is strictly greater than 2');
			assert.isBelow(5, 2, '5 is strictly greater than 2');
    		assert.isAtleast(5, 2, '5 is strictly greater than 2');
    		var teaServed = true;
			assert.isTrue(teaServed, 'the tea has been served')
			assert.isNotTrue(teaServed, 'great, time for tea!');
    	})
    	// and so on....have a look at the api http://www.chaijs.com/api/assert/
    })
})