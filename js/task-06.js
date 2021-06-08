
const validationInput = document.querySelector('#validation-input');
const inputLength = validationInput.dataset.length;

validationInput.addEventListener('blur', controlOfValidation);

function controlOfValidation(event) {

  if (event.currentTarget.value.length < inputLength) {
    validationInput.classList = 'invalid';
  } else {
    validationInput.classList = 'valid';
  }
    }