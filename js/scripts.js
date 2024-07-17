const typing = document.getElementById('typing');
const words = ['info.', 'recommendations.', 'projects.'];
let word = words[0];
let i = 0;
let y = word.length;

const speed = 150; // in ms
const waitTime = 2000; // in ms
let isDeleting = false;
let waiting = false;

function typeWriter() {
    if (i < word.length) {
        // If word not finished typing, continue
        typing.innerHTML += word.charAt(i);
        i++;
    } else {
        // Done typing, wait before start deleting
        if (!isDeleting && !waiting) {
            waiting = true;
            setTimeout(() => {
                isDeleting = true;
                waiting = false;
            }, waitTime); // Wait 
        } else if (isDeleting) {
            deleteWord()
            // When deletion is done, select new word
            if (typing.innerHTML === '') {
                selectNewWord()
            }
        }
    }
}

function deleteWord() {
        y--;
        typing.innerHTML = typing.innerHTML.substr(0, y); // Simulate the deletion of the text
}

function selectNewWord() {
    const rand = Math.floor(Math.random() * words.length);
    if (words[rand] !== word) {
        // Choose new word, only if it differs from the old one
        i = 0;
        word = words[rand];
        y = word.length;
        isDeleting = false; //reset so it can pause again
    }
}

setInterval(typeWriter, speed);

const hello_first = document.getElementById('hello_first');
const hello_second = document.getElementById('hello_second');
const languages = ['Olá!', 'Hello!', 'Dag!', 'Hola!', 'Bonjour!', '你好!']
let language = languages[0];
hello_first.innerText = language;
const interval = 1800; // 2 seconds
function sayHello() {
    const rand = Math.floor(Math.random() * languages.length);
    if (languages[rand] !== language) {
        language = languages[rand];
        if (hello_first.innerText != '') {
            hello_second.innerText = language;
            hello_second.style.opacity = 1;

            hello_first.innerText = '';
            hello_first.style.opacity = 0;
        } else {
            hello_first.innerText = language;
            hello_first.style.opacity = 1;

            hello_second.innerText = '';
            hello_second.style.opacity = 0;
        }

    }
}
setInterval(sayHello, interval);


let navbarToggler = document.getElementById('navbar-toggler');
const squares = document.getElementById('squares');
navbarToggler.addEventListener('click', () => {
    navbarToggler = document.getElementById('navbar-toggler')
    if (navbarToggler.classList.contains('collapsed')) {
        squares.style.marginTop = '3.5rem';
    } else {
        squares.style.marginTop = '14rem';
    }
});



function enableInfoElement(click_me_id, info_id) {
    var click_me_element = document.getElementById(click_me_id)
    var info_element = document.getElementById(info_id)

    click_me_element.classList.add('fade-out');

    click_me_element.addEventListener('animationend', () => {
        click_me_element.style.display = "none"
        info_element.style.display = "block"
    });
}
