import { isYes } from './functions.js' ;

const myButton = document.getElementById('action-button');

myButton.onclick = () => {
    alert('welcome to my quiz');
    const myConfirmation = confirm('Do you want to take my quiz?');
    if(!myConfirmation)
        return;

    //Question 1
    const userAnswer1 = prompt('I have been to 7 continents. (yes/no)');
    const sanitizedUserAnswer1 = userAnswer1.toLocaleLowerCase().trim();
   
    const userIsCorrect1 = isYes(sanitizedUserAnswer1);
  
    if(userIsCorrect1) {
        alert('You are good at reading!');
    } else {
        alert('Soooooo wrong...');
    }

    //Question Two
    const userAnswer2 = prompt('I have never been snowboarding (yes/no)');
    const sanitizedUserAnswer2 = userAnswer2.toLocaleLowerCase().trim();
   
    const userIsCorrect2 = isYes(sanitizedUserAnswer2);

    if(userIsCorrect2) {
        alert('You are good at reading!');
    } else {
        alert('Soooooo wrong...');
    }
//Question Three
    const userAnswer3 = prompt('Whiskey is a Queen-Cat (yes/no)');
    const sanitizedUserAnswer3 = userAnswer3.toLocaleLowerCase().trim();
   
    const userIsCorrect3 = isYes(sanitizedUserAnswer3);

    if(userIsCorrect3) {
        alert('You are good at reading!');
    } else {
        alert('Soooooo wrong...');
    }
};