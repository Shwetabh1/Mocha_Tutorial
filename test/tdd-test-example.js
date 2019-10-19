let expect = require('chai').expect; 

/*
 * A bit of a history first!
 * TDD was created by Kent Beck in the mid 1990s as part of his work for the Chrysler Corporation where he also created Extreme Programming, of which TDD is just a part. 
 * He then went on to create one of the first unit testing frameworks for TDD in Smalltalk called SUnit.
 * Then he collaborated with Erich Gamma to implement the first Java unit testing framework called JUnit. 
 * JUnit has since been the basis for many other xUnit testing frameworks implemented for other languages.
 * This how TDD started.
 */
 
 /*
 * What exactly is a TDD?
 * TDD is a process for writing code that helps you take personal responsibility for the quality of your code.
 * The process drives this by having you write the unit tests before the production code.
 * This can seem pretty strange at first, but after you've used the process for a while, it becomes the norm and you'll find it hard to write code any other way.
 * Even though the tests are written before the production code, that doesn't mean that all the tests are written first.
 * You write one unit test for one test case and then you write the production code to make it pass.
 * The tests and the production code are written together with small tests being written and then small bits of production code that make those tests pass.
 * This short cycle of writing a unit test and then writing the production code to make it pass provides immediate feedback on the code. 
 * This feedback is one of the essential features of TDD. 
 * So what are some of the benefits of using TDD? 
 * TDD gives you confidence to make changes in your code because you have to test before you begin that verifies the code is working and will tell you if any of your changes have broken anything.
 * This confidence comes from the immediate feedback the test provide for each small change in the production code. 
 * The test document what the production code is supposed to do and a new developer looking at the code can use the unit test as a source of documentation for understanding what the production code is doing.
 * Writing the unit test first helps drive good object oriented design as making individual classes and functions testable and isolation drives the developer to break the dependencies and add interfaces rather than linking concrete implementations together directly.
 * The TDD work flow is broken up into three phases referred to as the red phase, green phrase, and refactor phase.
 * The first phase is the red phase. In the red phase, you write a failing unit test for the next bit of functionality you want to implement in the production code.
 * Next comes the green phase, where you write just enough production code to make the failing unit test pass. Last is the refactor phase, where you clean up the unit test and the production code to remove any duplication and make sure the code follows your team's coding standards and best practices.
 * Then you repeat the process for all the functionality you need to implement and all the positive and negative test cases. 
 */
 
/*
 * Robert Martin, aka, Uncle Bob created the following laws of TDD in his book, Clean Code: A Handbook of Agile Software Development.
 * These laws help ensure you're following the TDD process. 
 * The first law, you may not write any production code until you have first created a failing unit test, falls along with the idea of writing the unit test first. Seeing your new unit test fail before you've implemented the production code is a sign that the unit test has been implemented properly. 
 * The second law, you may not write more of a unit test than is sufficient to fail, forces you to write only enough of a unit test for the next test case. And the next test case should always be the simplest test case. 
 * The last law, you may not write more production code than is sufficient to pass the currently failing unit test, keeps you from writing production code without any unit test to verify it. 
 * These three laws help to keep you in a small, tight loop of writing a little test that fails, then writing a little production code to make it pass.
 * Each iteration of the loop should only be a few minutes long and you're always running the unit test to verify nothing is gotten broken. If something does get broken, you can easily back out the changes that caused the problem because you implemented them in just the last couple of minutes.
 */

// The requirement is to write a function that returns Fizz at multiples of 3, Buzz at multiples of 5
// and FizzBuzz at multiples of 3&5.
// To follow a test driven approach first write a failing unit test first. 
// Then for each requirement add a unit test and test out the functionality

function fizzBuzz(value) {
    if (isMultiple(value, 3)) {
        if (isMultiple(value, 5))
            return "FizzBuzz";
        return "Fizz";
    }
    if (isMultiple(value, 5))
        return "Buzz";

    return value.toString();
}

function isMultiple( value, mod ) {
    return (value % mod) == 0
}

describe('when non multiples of 3 & 5 are passed', function() {
    it('returns the same number', function() {
        expect(fizzBuzz(1)).to.equal('1');
        expect(fizzBuzz(2)).to.equal('2');
	});
});

describe('when multiples of 3 are passed', function() {
    it('returns the Fizz', function() {
        expect(fizzBuzz(3)).to.equal('Fizz');
        expect(fizzBuzz(6)).to.equal('Fizz');
	});
});

describe('when multiples of 5 are passed', function() {
    it('returns the Fizz', function() {
        expect(fizzBuzz(5)).to.equal('Buzz');
        expect(fizzBuzz(10)).to.equal('Buzz');
	});
});

describe('when multiples of 3 & 5 are passed', function() {
    it('returns the FizzBuzz', function() {
        expect(fizzBuzz(15)).to.equal('FizzBuzz');
        expect(fizzBuzz(30)).to.equal('FizzBuzz');
	});
});

