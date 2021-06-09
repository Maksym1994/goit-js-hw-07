
const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', () => {
    const valueInput = inputEl.value.trim()
    
    spanEl.textContent = (valueInput === "" ) ? 'незнакомец' : valueInput;   
})
