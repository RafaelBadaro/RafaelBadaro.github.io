// Author: Rafael Badaro
const buttonBuy = document.getElementById('button-buy');
const products = document.getElementById('products');
const btnMinus = document.getElementById('btn-minus');
const btnPlus = document.getElementById('btn-plus');
const spanCounter = document.getElementById('span-counter');
const spanTotal = document.getElementById('span-total');

let counter = 0;
let total = 0;
const valueOfBag = 19.95;

buttonBuy.addEventListener('click', () => {
    counter++;
    total = Math.round((total += valueOfBag) * 100) / 100;
    spanCounter.innerText = counter;
    spanTotal.innerText = total;
    products.style.visibility = 'visible';
});

btnMinus.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
        total = Math.round((total -= valueOfBag) * 100) / 100;
    }

    if (counter === 0) {
        products.style.visibility = 'hidden';
        total = 0;
    }

    spanCounter.innerText = counter;
    spanTotal.innerText = total;
});
btnPlus.addEventListener('click', () => {
    counter++;
    total = Math.round((total += valueOfBag) * 100) / 100;
    spanCounter.innerText = counter;
    spanTotal.innerText = total;
});



