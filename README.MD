<h1 align="center"> Mocha-Tutorial </h1>

<div align="center">
    <img src="https://github.com/Shwetabh1/Mocha_Tutorial/blob/master/Images/mocha_final.jpg" alt="Mocha JS Tutorial" width="418" height="332"/>
  <br>
</div>


## What is this?
> You can never understand everything but you should push yourself to understand the system.<br/>
> *-Ryan Dahl (creator of Node.JS)*

This repository aims to explain the 'WHAT', 'WHY' and 'HOW' of MochaJS and ChaiJS in a simplifieid manner.

## Table of Contents
1. What is Mocha?
1. What is Chai?
1. How to write Mocha Tests?
	1. Setup
	1. `describe()`
	1. `it()`
	1. `before()` and `beforeEach()`
	1. `after()` and `afterEach()`
	1. `only()`
1. `assert()`
1. `should()`
1. `expect()`
1. Difference between `assert()`, `should()` and `expect()`.
1. Useful Links.

### What is Mocha?
Mocha is a JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting.
### What is Chai?
Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.
### How to write Mocha Tests?
	#### Setup
		##### 1. Initiate a npm project.
		 npm init 
		##### 2. Installing Mocha 
		 npm i -g --save-dev mocha 
		##### 3. Installing Chai 
		 npm i -g --save-dev chai 
		Note: save-dev saves it as a dev dependency
		##### 4. create a test folder. Add your tests into it.
	#### describe()
	They are commonly known as test suites, which contains test cases. They are nothing more than merely groups, and you can have groups within groups. You can nest it as deep as you want. _Also see `basic-test.js` above._
	#### it()
	It is nothing but a test case.
	#### `before()` and `beforeEach()`
	They are also called as **hooks**. They are used to set preconditions.
	`before()` is run before all it/describe. `beforeEach` is run before every it.
	#### `after()` and `afterEach()`
	They are also called **hooks** and are used to clean up after test cases.
	#### only() 
	It ensures only the test cases in only block is executing.
	**NOTE** _Also see `basic-test.js` above for example on each._
### `assert()`
_Explained via code in `assert-test-example.js`_
### `should()`
_Explained via code in `should-test-example.js`_
### `expect()`
_Explained via code in `expect-test-example.js`_
### Difference between `assert()`, `should()` and `expect()`.
`assert()` follows a TDD style assertion. `expect()` and `should()` both follow BDD style. Both use the same chainable language to construct assertions, but they differ in the way an assertion is initially constructed. In the case of should, there are also some caveats and additional tools to overcome the caveats. Moreover, `expect()` require is just a reference to the `expect()` function, whereas with the `should()` require, the function is being executed.
### Useful Links.
* https://gist.github.com/samwize/8877226
* https://www.youtube.com/watch?v=MLTRHc5dk6s
* https://gist.github.com/soheilhy/867f76feea7cab4f8a84
* https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai


