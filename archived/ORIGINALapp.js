const myButton = document.getElementById('action-button');

myButton.onclick = () => {
    alert('welcome to my quiz');
    const myConfirmation = confirm('Do you want to take my quiz?');
    console.log(myConfirmation);

    const userAnswer1 = prompt('How many countries have I been to?');
  
    
    if(userAnswer1 === '46') {
        alert('correct!');
    } else {
        alert('wrong!');
    }

    const userAnswer2 = prompt('Where am I going snowboarding?');
    const sanitizedUserAnswer2 = userAnswer2.toLocaleLowerCase().trim();
    
    if(sanitizedUserAnswer2 === 'france') {
        alert('correct!');
    } else {
        alert('wrong!');
    }

    const userAnswer3 = prompt('What kind of animal is Whiskey');
    const sanitizedUserAnswer3 = userAnswer3.toLocaleLowerCase().trim();
    
    if(sanitizedUserAnswer3 === 'cat') {
        alert('correct!');
    } else {
        alert('wrong!');
    }
};

    




