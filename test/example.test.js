// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { isYes } from '../test/functions.js';
const test = QUnit.test;

test('isYes should return true if user says yes', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userAnswer = 'yes';

    //Act 
    // Call the function you're testing and set the result to a const
    const answerIsCorrect = isYes(userAnswer);

    //Assert
    // Make assertions about what is expected valid result
    
    assert.equal(answerIsCorrect, true);
});
test('isYes should return false if user does not say yes', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userAnswer = 'apple';

    //Act 
    // Call the function you're testing and set the result to a const
    const answerIsCorrect = isYes(userAnswer);

    //Assert
    // Make assertions about what is expected valid result
    
    assert.equal(answerIsCorrect, false);
});