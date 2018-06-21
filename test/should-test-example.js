let should = require('chai').should(); //This is a BDD Style Assertion
let sayHello = require('../index.js').sayHello();

/* 
 * The BDD styles are expect and should. Both use the same chainable language to construct assertions.
 */

describe(__filename, function() {
    describe('Say Hello Function', function() {
        it('should return hello', function() {
            sayHello.should.equal('hello');
        })
    })
})

//have a look at the api http://www.chaijs.com/api/bdd/

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