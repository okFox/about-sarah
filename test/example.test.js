// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { isCorrect } from '../test/functions.js';
const test = QUnit.test;

test('isCorrect should return true if user says yes', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userAnswer = 'yes';

    //Act 
    // Call the function you're testing and set the result to a const
    const answerIsCorrect = isCorrect(userAnswer);

    //Assert
    // Make assertions about what is expected valid result
    
    assert.equal(answerIsCorrect, true);
});