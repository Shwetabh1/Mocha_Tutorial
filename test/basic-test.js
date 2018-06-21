let assert = require('chai').assert;
//The functions to be tested
let sayHello = require('../index.js').sayHello();
let sum = require('../index.js').calculateSum;
let multiply = require('../index.js').Multiply;

describe(__filename, function() {
    describe('Say Hello Function', function() {
        it('should has a legth of 5', function() {
            assert.lengthOf(sayHello, 5);
        })
        it('type must be a string', function() {
            assert.typeOf(sayHello, 'string');
        })
    })
})

describe('Calculate Sum', function() { //Notice the only block. This ensures only this function will be tested.
    before('prepare test environment', function() {
        //executes once before any test case has run
        console.log('executes once before any test case');
    })
    beforeEach('execute before every test case', function() {
        //execute before every test case
        console.log('before each of the test case');
    })
    it('should return sum as 5', function() {
        assert(sum(3, 2), 5);
    })
    it('should return a Number', function() {
        assert.typeOf(sayHello, 'string');
    })
    afterEach('executes after every test case', function() {
        //executes after each and every test case
        console.log('after each of the test case');
    })
    after('executes after all test cases have executes', function() {
        // excutes once after every test case has executes
        console.log('after every test case has executed');
    })
})

//Asynchronous Function Example
describe('Calculator Tests', function() {
	// our testcases.
	it('returns 1+1=2', function(done) {
		assert.equal(sum(1, 1), 2);
		// Invoke done when the test is complete.
		done();
	});

	it('returns 2*2=4', function(done) {
		assert.equal(multiply(2, 2), 4);
		// Invoke done when the test is complete.
		done();
	});
});