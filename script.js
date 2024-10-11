console.log('Coding Resources Web App Loaded');


const texts = ["HTML", "CSS", "JavaScript", "Python", "C"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
let speed = 150;

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing').textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1000); 
    } else {
        setTimeout(type, speed);
    }
})();
