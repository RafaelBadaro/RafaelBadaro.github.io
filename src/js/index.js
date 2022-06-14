// Author: Rafael Badaro

const scrollFunc = function () {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight; // selects the height of the browser window
    // Adds a reveal point for the image to show based on device
    // 992 = 992px (md breakpoint)
    const revealPoint = windowHeight > 992 ? 250 : 300;

    // Iterates through the list of elements that we want to show
    for (let i = 0; i < reveals.length; i++) {
        // Gets the distance of between element and top of the page
        const revealTop = reveals[i].getBoundingClientRect().top;
        // Check the distance of the element in comparison to the defined revealPoint
        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.remove('hide'); // shows element
        } else {
            reveals[i].classList.add('hide'); // else keep element hidden
        }
    }
};
window.addEventListener('scroll', scrollFunc);

const moreThanJustCoffee = document.getElementById('moreThanJust');
let i = 0;
const speed = 300;
const words = ['coffee', 'beans', 'grinding'];
let word = words[0];
let y = word.length;
function typeWriter() {
    if (i < word.length) {
        // If word not finished typing, continue
        moreThanJustCoffee.innerHTML += word.charAt(i);
        i++;
    } else {
        // If word done typing, choose new word
        y--;
        moreThanJustCoffee.innerHTML = moreThanJustCoffee.innerHTML.substr(0, y); // Simulate the deletion of the text
        if (moreThanJustCoffee.innerHTML === '') {
            const rand = Math.floor(Math.random() * words.length);
            if (words[rand] !== word) {
                // Choose new word, only if it differs from the old one
                i = 0;
                word = words[rand];
                y = word.length;
            }
        }
    }
}
setInterval(typeWriter, speed);

const btnKnowUs = document.getElementById('button-knowus');
const mystory = document.getElementById('mystory');
btnKnowUs.addEventListener('click', () => {
    mystory.scrollIntoView();
});
