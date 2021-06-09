
const incrementBtnEl = document.querySelector('button[data-action="increment"]');
const decrementBtnEl = document.querySelector('button[data-action="decrement"]');
const valueEl = document.getElementById('value');

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