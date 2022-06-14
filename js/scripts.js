const typing = document.getElementById('typing');
let i = 0;
const speed = 300;
const words = ['coffee', 'beans', 'grinding'];
let word = words[0];
let y = word.length;
function typeWriter() {
    if (i < word.length) {
        // If word not finished typing, continue
        typing.innerHTML += word.charAt(i);
        i++;
    } else {
        // If word done typing, choose new word
        y--;
        typing.innerHTML = typing.innerHTML.substr(0, y); // Simulate the deletion of the text
        if (typing.innerHTML === '') {
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