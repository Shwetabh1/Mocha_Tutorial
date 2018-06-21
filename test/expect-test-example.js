let expect = require('chai').expect; //This is a BDD Style Assertion
let sayHello = require('../index.js').sayHello();

/* 
 * The BDD styles are expect and should. Both use the same chainable language to construct assertions.
 */

describe(__filename, function() {
    describe('Say Hello Function', function() {
        it('will return hello', function() {
            expect(sayHello).to.equal('hello');
        })
    })

    describe('Demonstration of other methods of expect', function() {
        it('demonstrates BDD style correctly', function() {
            Object.prototype.b = 2;

            expect({ a: 1 }).to.have.own.property('a');
            expect({ a: 1 }).to.have.property('b').but.not.own.property('b');

            expect({ a: 1 }).to.own.include({ a: 1 });
            expect({ a: 1 }).to.include({ b: 2 }).but.not.own.include({ b: 2 });
        })
        // and so on....have a look at the api http://www.chaijs.com/api/bdd/
    })
})

/* 
 * Chains :
 * to
 * be
 * been
 * is
 * that
 * which
 * and
 * has
 * have
 * with
 * at
 * of
 * same
 * but
 * does
 */