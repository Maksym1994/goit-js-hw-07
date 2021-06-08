
const incrementBtnEl = document.querySelector('#counter button[data-action="increment"]');
const decrementBtnEl = document.querySelector('#counter button[data-action="decrement"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

function increment () {
    counterValue += 1;
    valueEl.textContent = counterValue;
};

function decrement () {
    counterValue -= 1;
    valueEl.textContent = counterValue;
};

incrementBtnEl.addEventListener('click', increment);
decrementBtnEl.addEventListener('click', decrement);